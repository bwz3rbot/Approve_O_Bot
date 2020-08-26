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

You'll have to create a new account for your bot before you move any further.\
And you'll have to grant the account permissions on both of the subs you are having it work on.\
reddit.com/prefs/apps

<img src='https://i.imgur.com/yq8akJ7.png'>

## Installing

Now that you've set up your bot account, granted it permissions on both subreddits, and created a script app, it's time to download the source code and paste in your environment variables.

Download the .zip file containing the source code on this page. Unzip it and save it to your computer somewhere. Now open up the pw.envEXAMPLE file.\
Also have open reddit.com/prefs/apps as you'll need to copy/paste the items you'll find there. User agent is just a name that the server will identify your bot by. It can be whatever you want.

The <strong>MASTER_SUB</strong> will be the one you pin the post to. Have your users call the bot by its name /u/(whatever you named the account).

When they call the bot by its username it will receive a mention in its inbox and will respond.\
<em>If</em> users are allowed to post in your sub, and <em>when</em> they call this bot from it -be it from the pinned post or otherwise- the bot will grant them contributor rights on your defined <strong>SECONDARY_SUB</strong>.\
These names are <u>case sensitive!</u> So if your sub has a capital in it, and your pw.env file doesn't match, it will not work.


    USER_AGENT=''
    CLIENT_ID=''
    CLIENT_SECRET=''
    REDDIT_USER=''
    REDDIT_PASS=''
    MASTER_SUB=''
    SECONDARY_SUB=''

now remove the EXAMPLE from the end of the filename.

> pw.envEXAMPLE = pw.env

Now go back to your terminal and cd into the folder. Run this command to install the dependencies required to run a reddit bot in JavaScript.

> npm install

Give it a minute to finish installing the dependencies. . . Then:


> node src/app.js


## Usage <a name = "usage"></a>

Just keep a terminal open with it running.\

As long as your internet is connected, it should continuously scan for mentions. If the bot is powered off and then restarted, it will scan the 5 most recent items in the inbox and then attempt to add the users who posted them as contributors to the secondary sub.