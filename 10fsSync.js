const {readFileSync, writeFileSync} = require('fs');


console.log('starting task');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/resultSync.txt',
    `Here is the result: ${first} ${second}`, {flag: 'a'},
    console.log('done task')
)


console.log('starting next task');