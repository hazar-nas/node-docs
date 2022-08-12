const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');


writeFileSync('./content/result-sync.txt', `the result is: ${first} `)

// console.log("first text: ", first)