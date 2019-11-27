# LibWalk

### Github Workflow
You are assigned ticket #5 which tells you to implement a new feature.


```
git pull origin master      # get latest code
git checkout -b feature/5   # create new branch and check it out

# make some changes to the code... 
# you can make as many commits to your branch as you want

git add -A
git commit -m "commit message"

git push origin feature/5   # push your branch to github
```
When you are ready to make a pull request just go to GitHub because its easier to see the conflicts and comments etc. Any pull request should be reviewed and approved by at least 1 other teammates. 

Here is a useful [link](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request) on creating pull requests in Github. 

# Coding Stuff

### Events Page

The Events Page will query for events using the `getUserEvents(userId)` cloud function. That function will query the events collection based on the user's subscriptions. This means that in order for the page to display some events:

1. The user must have some subscriptions
2. There must exist some Events where the `event.clubsHosting` array contains at least one of the orgs that the user is subscribed to 
