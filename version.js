const timeReg = /const time\s*=\s*(.+?);/gi;

exports.build = function (text, time = new Date()) {
    return text.replace(timeReg, `const time = '${time}';`);
};