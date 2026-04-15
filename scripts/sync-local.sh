#!/bin/bash

# This script synchronizes the SDKs in this monorepo to a local external directory.
# This is useful when the external directory contains checkouts of the individual SDK repositories.

set -e

# Default destination path
DEST_BASE_PATH=${1:-"/Users/alexasomba/Documents/GitHub/alexasomba/paystack-sdks/sdks"}
SDK_DIR="sdks"
SDKS=("php" "go" "python" "node" "axios" "browser" "inline")

echo "--------------------------------------------------"
echo "Starting Local SDK Sync"
echo "Target Base Path: $DEST_BASE_PATH"
echo "--------------------------------------------------"

if [ ! -d "$DEST_BASE_PATH" ]; then
    echo "[ERROR] Destination base path does not exist: $DEST_BASE_PATH"
    exit 1
fi

for sdk in "${SDKS[@]}"; do
    src="$SDK_DIR/$sdk/"
    dest="$DEST_BASE_PATH/paystack-$sdk/"
    
    if [ -d "$src" ]; then
        echo "Syncing $sdk -> paystack-$sdk..."
        
        # Ensure target folder exists
        mkdir -p "$dest"
        
        # Sync files
        # --delete: remove files in destination that are not in source
        # --exclude '.git': preserve git metadata in destination and don't copy it from source
        # --exclude 'node_modules', 'dist', etc: avoid copying build artifacts
        rsync -av --delete \
            --exclude '.git' \
            --exclude 'node_modules' \
            --exclude 'dist' \
            --exclude '.turbo' \
            --exclude '.DS_Store' \
            --exclude 'python_gen.log' \
            --exclude 'php_gen.log' \
            --exclude 'go_gen.log' \
            "$src" "$dest"
    else
        echo "[WARNING] Source SDK directory not found: $src"
    fi
done

echo "--------------------------------------------------"
echo "Local Sync Complete!"
echo "--------------------------------------------------"
