#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Configuration
TEMP_DIR="./.maskmodule-tmp"
ZIP_NAME="MaskModule.zip"
MODULE_NAME="MaskModule"

# Optional output path passed as argument
DEST_PATH="$1"

# Clean up previous temporary files and ZIP
rm -rf "$TEMP_DIR" "$ZIP_NAME"

# Create temporary structure and copy source files
mkdir -p "$TEMP_DIR/$MODULE_NAME"
cp -r ./src/* "$TEMP_DIR/$MODULE_NAME"

# Remove all test folders recursively
find "$TEMP_DIR" -type d -name "__tests__" -exec rm -rf {} +

# Create the ZIP archive
cd "$TEMP_DIR"
zip -r "../$ZIP_NAME" "$MODULE_NAME" > /dev/null
cd ..

# Move ZIP to the destination path if provided
if [ -n "$DEST_PATH" ]; then
  mkdir -p "$DEST_PATH"
  mv "$ZIP_NAME" "$DEST_PATH/"
  echo "✅ $ZIP_NAME has been exported to $DEST_PATH"
else
  echo "✅ $ZIP_NAME has been created in the project root"
fi

# Remove temporary files
rm -rf "$TEMP_DIR"
