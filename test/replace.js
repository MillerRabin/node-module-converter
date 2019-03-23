const replace = require('../replace.js');
const assert = require('assert');

const nodeModule = "const IntentionStorage = require('intention-storage');";
const localModule = "const IntentionStorage = require('./main.js');";
const deleteModule = "const delReq = require('del-req'); //Delete for Browser environment";

describe('Intenion builder', function () {
    describe('toImport', function () {
        it('Rename require from node_modules', function () {
            const nm = replace.toImport(nodeModule);
            assert.strictEqual(nm, 'import IntentionStorage  from "/node_modules/intention-storage/browser/main.js";');
        });
        it('Rename require from local', function () {
            const nm = replace.toImport(localModule);
            assert.strictEqual(nm, 'import IntentionStorage  from "./main.js";');
        });

        it('Delete require by comment', function () {
            const nm = replace.toImport(deleteModule);
            assert.strictEqual(nm, '');
        });

    });
});