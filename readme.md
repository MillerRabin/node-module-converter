#Node Module Converter
It convert nodejs module in require syntax to es native javascript modules.
The module uses pattern string replace and has a limited functionality, 
but it doesn`t add any additional overhead code

# Install
```bash
    npm install node-module-converter
```

# Patterns

## Replace
| Require syntax        | es module results           |
| ------------- | ------------- |
| const test = require('test');      | import test  from "/node_modules/test/browser/main.js"; |
| const test = require('./test.js'); | import test  from "./test.js"; |
| const test = require('test'); //Delete for Browser environment | |

## Version
| Require syntax        | es module results           |
| ------------- | ------------- |
| //${time}      | Puts module built time in comments |
