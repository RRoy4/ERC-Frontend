#!/usr/bin/env bash

# Find all PDF files recursively
find . -type f -iname "*.pdf" | while read -r file; do
    # Get the base name of the file (e.g., "document.pdf")
    base=$(basename "$file")

    # If file is already in current dir, skip
    if [ "$(dirname "$file")" = "." ]; then
        echo "Skipping '$base' (already in root)"
        continue
    fi

    # If a file with the same name exists in root, make a new unique name
    dest="./$base"
    if [ -e "$dest" ]; then
        i=1
        while [ -e "./${i}_$base" ]; do
            i=$((i+1))
        done
        dest="./${i}_$base"
    fi

    # Move the file to root
    mv "$file" "$dest"
    echo "Moved '$file' -> '$dest'"
done

