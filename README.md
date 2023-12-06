

# 1. Create a new tag
# Create a new branch from tag v1.1
git checkout -b newbranch v1.6.x

# Do some work and commit it

# Create a new tag from your work
git tag -a -m "Tag version 1.6.x, a bugfix release" v1.6.x

# 2. Update the existing tag
1. Delete the tag

git tag -d v1.6.6

2. Create the tag again: This will "move" the tag to point to your latest commit on that branch

git tag v1.6.6

3. Delete the tag on remote

git push origin :v1.6.6

4. Create the tag on remote

git push origin v1.6.6