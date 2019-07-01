const timeReg = /\/\/(\${time})/gi;

exports.build = function (text, time = new Date()) {
    return text.replace(timeReg, `//${time};`);
};