// MODULE
/*
every file is a module by default

import: " require('filepath') "
export: modules.exports

*/

const path = require('path');
console.log("seperator: ",path.sep) //  \

const filePath = path.join('/content', '/rmdir','/request');
console.log("file path: ",filePath); //  \content\rmdir\request

const base = path.basename(filePath);
console.log("basename: ", base) //  request

const absolute = path.resolve(__dirname, 'content', 'application', 'resolver');
console.log("resolver: ",absolute); // C:\Users\USER\Desktop\node-mock\content\application\resolver


