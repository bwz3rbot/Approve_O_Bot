// This is the main entry point of the application. 
// It starts by requiring the Dependencies needed to run a reddit bot in the 'config/snoo-config.js' file.
// It then grabs a list of services from the 'service/_Services.js' file.
// These micro-services contain functions that allow a user to query, manipulate, and save externally [the data from the Reddit API].

// Require Configuration Files
require('dotenv').config({
    path: "./pw.env"
});

// Require and Initialize The Snoo-Pendencies With Authentication Credentials
require('./config/snoo-config');


// Get List of Available Services
const Services = require('./service/_Services').get

const ascii_art = require('./ascii_art')

Services.approve_o_bot.follow_ApproveMeThread(process.env.MASTER_SUB,process.env.SECONDARY_SUB);