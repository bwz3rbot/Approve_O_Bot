// Configuration File for Snoowrap and Snoostorm

// Requiring Snoowrap
const Snoowrap = require('snoowrap');




// Snoowrap Init
const snoowrap = new Snoowrap({
    userAgent: process.env.USER_AGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

// Snoowrap Config
snoowrap.config({
    requestDelay: 20000,
    warnings: true,
    continueAfterRatelimitError: false,
    retryErrorCodes: [502, 504, 522],
    maxRetryAttempts: 3,
    debug: false
})

module.exports = {
    snoowrap: snoowrap,
    Snoowrap:Snoowrap
}