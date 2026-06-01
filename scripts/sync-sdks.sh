#!/bin/bash

# This script syncs all SDKs into standalone local checkouts and pushes those repositories.

set -e

DEFAULT_LOCAL_SDK_PATH="/Users/alexasomba/Documents/GitHub/alexasomba/paystack-sdks/sdks"
DEST_BASE_PATH=${LOCAL_SDK_PATH:-"$DEFAULT_LOCAL_SDK_PATH"}
GIT_USER_ID=${GIT_USER_ID:-"alexasomba"}
GIT_HOST=${GIT_HOST:-"github.com"}

# Check if a release note was provided
RELEASE_NOTE=$1
if [ -z "$RELEASE_NOTE" ]; then
    RELEASE_NOTE="Update SDKs from openapi spec"
fi

echo "Local SDK path: $DEST_BASE_PATH"
/bin/bash ./scripts/sync-local.sh "$DEST_BASE_PATH"

while IFS=$'\t' read -r sdk repo branch; do
    if [ -z "$sdk" ]; then
        continue
    fi

    echo "--------------------------------------------------"
    echo "Pushing SDK: $sdk -> $repo ($branch)"
    echo "--------------------------------------------------"

    repo_dir="$DEST_BASE_PATH/$repo"

    if [ ! -d "$repo_dir/.git" ]; then
        echo "[ERROR] Standalone SDK repository is not a git checkout: $repo_dir"
        exit 1
    fi

    current_branch=$(git -C "$repo_dir" branch --show-current)
    if [ "$current_branch" != "$branch" ]; then
        git -C "$repo_dir" checkout "$branch"
    fi

    git -C "$repo_dir" add .

    if git -C "$repo_dir" diff --cached --quiet; then
        echo "No changes to push for $repo."
    else
        git -C "$repo_dir" commit -m "$RELEASE_NOTE"
    fi

    git_remote=$(git -C "$repo_dir" remote)
    if [ "$git_remote" = "" ]; then
        if [ "$GIT_TOKEN" = "" ]; then
            echo "[INFO] \$GIT_TOKEN is not set. Using the git credential in your environment."
            git -C "$repo_dir" remote add origin "https://${GIT_HOST}/${GIT_USER_ID}/${repo}.git"
        else
            git -C "$repo_dir" remote add origin "https://${GIT_USER_ID}:${GIT_TOKEN}@${GIT_HOST}/${GIT_USER_ID}/${repo}.git"
        fi
    fi

    git -C "$repo_dir" pull origin "$branch" --no-rebase
    git -C "$repo_dir" push origin "$branch"
done < <(node scripts/sdk-registry.mjs sync-plan)

echo "--------------------------------------------------"
echo "All SDKs synced successfully!"
echo "--------------------------------------------------"
