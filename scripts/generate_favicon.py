from PIL import Image
import os
root = r"c:\Users\sudha\OneDrive\Desktop\balaji 2\balaji-builders11"
logo_path = os.path.join(root, 'public', 'logo.png')
out_path = os.path.join(root, 'public', 'favicon.ico')
print('Logo exists:', os.path.exists(logo_path))
try:
    img = Image.open(logo_path)
    img = img.convert('RGBA')
    sizes = [(16,16),(24,24),(32,32),(48,48),(64,64),(96,96),(128,128),(256,256)]
    # generate multi-size .ico
    img.save(out_path, format='ICO', sizes=sizes)
    print('Saved favicon at', out_path)

    # also export individual PNG files for use in <link> tags
    for w, h in sizes:
        png_path = os.path.join(root, 'public', f'favicon-{w}x{h}.png')
        resized = img.resize((w, h), Image.LANCZOS)
        resized.save(png_path, format='PNG')
        print(f'Saved {png_path}')

    # generate apple touch icon (180x180) if not already included
    apple_path = os.path.join(root, 'public', 'apple-touch-icon.png')
    apple_img = img.resize((180, 180), Image.LANCZOS)
    apple_img.save(apple_path, format='PNG')
    print(f'Saved {apple_path}')
except Exception as e:
    print('Error:', e)
