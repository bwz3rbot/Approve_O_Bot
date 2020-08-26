# approve_o_bot

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)


## About <a name = "about"></a>

This bot will continuously scan its inbox for mentions from the <em>Master Subreddit</em>. It will then add the user that mentioned it as a contributor on the <em>Secondary Sub</em>. You define these subreddit names in the <em>pw.env</em> file (along with your client credentials which you can find at (https://www.reddit.com/prefs/apps))


## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the bot up and running on your local machine.


## Prerequisites

Make sure you have the correct version of NodeJS for your system. You can find the download here(https://nodejs.org/en/download/)


## Installing


Download the .zip file containing the source code on this page. Unzip and open up your terminal. <em>cd</em> into the folder you just unzipped the bot to.

First edit your pw.envEXAMPLE file:

You'll have to have an account made for the bot and go to prefs/apps and create a script app. You are required to give it a valid and complete redirect uri, but it can go to anywhere. Say https://www.google.com

USER_AGENT=''\
CLIENT_ID=''\
CLIENT_SECRET=''\
REDDIT_USER=''\
REDDIT_PASS=''\
MASTER_SUB=''\
SECONDARY_SUB=''

now remove the EXAMPLE from the end of the filename.

> pw.envEXAMPLE = pw.env

Now go back to your terminal and cd into the folder. Run this command to install the dependencies required to run a reddit bot in JavaScript.

> npm install

Give it a minute to finish installing the dependencies. . . Then:


> node src/app.js


## Usage <a name = "usage"></a>

Just keep a terminal open with it running.
As long as your internet is connected, it should continuously scan for mentions. If the bot is powered off and then restarted, it will rescan the 5 most recent items in the inbox and attempt to add them as contributors if they are not already.