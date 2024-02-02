#!/bin/bash

#
# Shell script for initialize any project with new Git repository.
#
# Notes:
# - Git repository on GitHub, Bitbucket or Gitlab is assumed.
# - Git is assumed.
# - Node is assumed.
# - NPM is assumed.
# - Unix environment, WSL 2 with Ubuntu or Cygwin app is assumed.
#

# I recommend SSH connection. Example: git@github.com:jjpeleato/slides-starter-boilerplate.git
GIT="~"

# Check Git uri is not empty.
if [ "$GIT" = "~" ] ; then
    echo
    echo "Sorry! Git url is empty. Stop initialize."
    exit
fi

# Answer to continue
echo
echo "Warning! check the variable GIT if it is correct before continue."
echo "Do you want to initialize other Git project?. (y/n): "
read -r answer

if [ "$answer" != "${answer#[Yy]}" ] ; then
	echo
    echo "Sure! Cross your fingers and continue."
    sleep 1
else
    echo
    echo "Good bye! Stop initialize."
    exit
fi

# Remove .git/ directory.
echo
echo "Remove old git repository."
rm -rf .git/

# Start new Git repository and push first commit.
echo
echo "Start new Git repository."
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin "$GIT"
git push -u origin main

# Create develop branch and push all files.
echo
echo "Create develop branch and add all the code."
git checkout -b develop
git add .
git commit -m "feat: add all skeleton project files to the repository"
git push -u origin develop

# Finish
echo
echo "Finished! Initialize Git successfully."
exit
