const snoowrap = require('../config/snoo-config').snoowrap
const Snoowrap = require('../config/snoo-config').Snoowrap
const Snoostorm = require('snoostorm')
const colors = require('colors')

// Need a second client to make requests within the snoostorm, since snoostorm is using the main client to make all the stream requests.
const client = new Snoowrap({
    userAgent: 'addContributorBot',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
})

client.config({
    requestDelay: 20000,
    warnings: true,
    continueAfterRatelimitError: false,
    retryErrorCodes: [502, 504, 522],
    maxRetryAttempts: 3,
    debug: false
})


const follow_ApproveMeThread = function (masterSubName, secondarySubName) {

    const inbox = new Snoostorm.InboxStream(client)

    // Get the last 30 comments and a stream of the latest incoming.
    inbox.on('item', function (comment) {

        if (comment.subreddit_name_prefixed === `r/${masterSubName}`) {
            author = comment.author.name
            console.log('Adding '.blue + `u/${author}`.green + ` as contributor to ${secondarySubName}.`.blue)

            snoowrap.getSubreddit(secondarySubName).addContributor({
                name: author
            })

        } else {
            console.log(('u/' + comment.author.name + ' attempted to request me from an unauthorized subreddit!').red)
        }

    })

}




module.exports = {
    follow_ApproveMeThread: follow_ApproveMeThread
}