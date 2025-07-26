import os

def generate_image_list(root_dir, output_file):
    # List of valid image extensions
    image_extensions = {'.jpg', '.jpeg', '.png'}
    
    # Initialize list to store image paths
    image_paths = []
    
    # Walk through the directory structure
    for dirpath, _, filenames in os.walk(root_dir):
        # Filter for image files
        for filename in filenames:
            if os.path.splitext(filename)[1].lower() in image_extensions:
                # Construct relative path from root_dir
                rel_path = os.path.relpath(os.path.join(dirpath, filename), root_dir)
                # Convert to forward slashes and add prefix
                image_path = f"/images/recently_added/{rel_path.replace(os.sep, '/')}"
                image_paths.append(image_path)
    
    # Sort paths for consistency
    image_paths.sort()
    
    # Generate JavaScript content
    js_content = "const imageList: string[] = [\n"
    for path in image_paths:
        js_content += f'  "{path}",\n'
    js_content += "];\n\n"
    js_content += "export default imageList;"
    
    # Write to output file
    with open(output_file, 'w') as f:
        f.write(js_content)

if __name__ == "__main__":
    root_directory = "recently_added"
    output_filename = "imageList.js"
    generate_image_list(root_directory, output_filename)
    print(f"Generated {output_filename} with image paths")