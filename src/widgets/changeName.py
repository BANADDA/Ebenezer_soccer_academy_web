import os
import shutil

# Path to the folder containing the images
folder_path = "E:/finals"

# Counter variable to keep track of the new filenames
counter = 1

# Loop through all files in the folder
for file_name in os.listdir(folder_path):

    # Check if the file is an image
    if file_name.endswith(".JPG") or file_name.endswith(".jpeg") or file_name.endswith(".png"):
        
        # Generate the new filename
        new_file_name = str(counter) + ".JPG"

        # Build the full paths to the old and new files
        old_file_path = os.path.join(folder_path, file_name)
        new_file_path = os.path.join(folder_path, new_file_name)

        # Rename the file
        shutil.move(old_file_path, new_file_path)

        # Increment the counter
        counter += 1
