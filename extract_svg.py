from PIL import Image
import base64

# Open the image
img = Image.open('public/images/uploaded_image_1.png').convert('RGBA')

# Get dimensions
width, height = img.size
print(f"Image size: {width}x{height}")

# Let's find the blue pixels and crop to them
min_x, min_y, max_x, max_y = width, height, 0, 0
for x in range(width):
    for y in range(height):
        r, g, b, a = img.getpixel((x, y))
        # Blueish and not white/black
        if b > r + 20 and b > g + 20 and a > 100:
            if x < min_x: min_x = x
            if y < min_y: min_y = y
            if x > max_x: max_x = x
            if y > max_y: max_y = y

if min_x > max_x:
    print("No blue pixels found")
else:
    print(f"Blue logo bounding box: {min_x},{min_y} to {max_x},{max_y}")
    # crop it
    logo = img.crop((min_x, min_y, max_x+1, max_y+1))
    
    # Make white pixels transparent
    data = logo.getdata()
    new_data = []
    for item in data:
        r, g, b, a = item
        # If it's close to white, make it transparent
        if r > 240 and g > 240 and b > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    logo.putdata(new_data)
    
    logo.save('public/images/oxide-logo-pure.png')
    print("Saved cropped pure logo as oxide-logo-pure.png")
