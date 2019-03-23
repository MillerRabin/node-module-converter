exports.toImport = function(str) {
    let output = str.replace(/module.exports\s*=\s*/, 'export default ');
    output = output.replace(/const\s+(.+)\s*=\s*require\('(\.\/.+)'\);/g, 'import $1 from "$2";');                              //const test = require('./test.js');
    output = output.replace(/const\s+(.+)\s*=\s*require\('(.+)'\);/g, 'import $1 from "/node_modules/$2/browser/main.js";');    //const test = require('test.js');
    return output;
};