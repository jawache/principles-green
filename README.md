# Principles.Green

The **Principles of Green Software Engineering** are a core set of competencies needed to define, build and run sustainable software applications.


Update and install the web site localy:
1. Duplicate repo
2. npm install markdown-serve
3. npm install express
4. Create server.js in root folder with this code

```
var express = require('express'),
    mds = require('markdown-serve'),
    path = require('path');
 
var app = express();
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
 
app.use(mds.middleware({ 
    rootDirectory: path.resolve(__dirname, '/'),
    view: 'markdown'
}));
``` 
5. npm run start