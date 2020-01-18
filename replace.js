exports.toImport = function(str) {
    let output = str.replace(/const\s+(.+)\s*=\s*require\('(.+)'\); \/\/Delete for browser environment/gi, '');                   //const test = require('test'); //Deleted for browser environment
    output = output.replace(/module.exports\s*=\s*/g, 'export default ');
    output = output.replace(/const\s+(.+)\s*=\s*require\('(\.\/.+)'\);/g, 'import $1 from "$2";');                              //const test = require('./test.js');
    output = output.replace(/const\s+(.+)\s*=\s*require\('(.+)'\);/g, 'import $1 from "/node_modules/$2/browser/main.js";');    //const test = require('test');
    return output;
};
