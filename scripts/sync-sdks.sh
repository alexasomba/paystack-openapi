#!/bin/bash

# This script iterates through all SDKs and runs their git_push.sh script.
# It assumes you have GIT_TOKEN set in your environment if you want to push without prompt.

set -e

SDK_DIR="sdks"
SDKS=("php" "go" "python" "node" "axios" "browser")

# Check if a release note was provided
RELEASE_NOTE=$1
if [ -z "$RELEASE_NOTE" ]; then
    RELEASE_NOTE="Update SDKs from openapi spec"
fi

for sdk in "${SDKS[@]}"; do
    echo "--------------------------------------------------"
    echo "Syncing SDK: $sdk"
    echo "--------------------------------------------------"
    
    if [ -d "$SDK_DIR/$sdk" ]; then
        cd "$SDK_DIR/$sdk"
        if [ -f "git_push.sh" ]; then
            /bin/sh git_push.sh "alexasomba" "paystack-$sdk" "$RELEASE_NOTE"
        else
            echo "[WARNING] No git_push.sh found in $SDK_DIR/$sdk"
        fi
        cd ../..
    else
        echo "[ERROR] SDK directory not found: $SDK_DIR/$sdk"
    fi
done

echo "--------------------------------------------------"
echo "All SDKs synced successfully!"
echo "--------------------------------------------------"
