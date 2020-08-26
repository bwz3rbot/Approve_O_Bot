const figlet = require('figlet')
const colors = require('colors')
const dateFormat = require('dateformat')
const date = new Date();

const formattedDate = dateFormat(date,"isoDateTime")

figlet.text('u/bwz3r', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green);
});
figlet.text(formattedDate, {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log((data.magenta));
});