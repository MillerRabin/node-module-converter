const version = require('../version.js');
const assert = require('assert');

const timeText = "//${time}";

describe('Version', function () {
    describe('append time', function () {
        it('add time', function () {
            const time = new Date();
            const nm = version.build(timeText, time);
            const timeStr = `//${time};`;
            assert.strictEqual(timeStr, nm);
        });
    });
});