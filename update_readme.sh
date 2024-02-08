#!/usr/local/bin/bash

# Define the name of the branch with the source README.md
SOURCE_BRANCH="master"

# Fetch latest changes from all branches
git fetch --all

# Store the current branch to return later
CURRENT_BRANCH=$(git branch --show-current)

# Checkout the source branch and get the latest version of README.md
git checkout $SOURCE_BRANCH
git pull origin $SOURCE_BRANCH

# Save the README.md path from the root of the repository
README_PATH=$(git rev-parse --show-toplevel)/README.md

# List all branches except the source branch and loop through them
git branch --format="%(refname:short)" | grep -v "^$SOURCE_BRANCH$" | while read branch; do
    echo "Updating $branch..."

    # Checkout the branch
    git checkout $branch

    # Make sure the branch is up to date
    git pull origin $branch

    # Copy the README.md from the source branch
    cp "$README_PATH" README.md

    # Add README.md to staging
    git add README.md

    # Commit the change
    git commit -m "Updating README.md"

    # Push the change to the remote repository
    git push origin $branch
done

# Checkout the original branch the user was on
git checkout $CURRENT_BRANCH

echo "Update process completed."
