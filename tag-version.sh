#!/bin/bash

# Ask for the version number
read -p "Enter new version tag (e.g. v1.0.1): " version

# Create the tag
git tag $version

# Push the tag to GitHub
git push origin $version

echo "✅ Tag $version created and pushed successfully."
