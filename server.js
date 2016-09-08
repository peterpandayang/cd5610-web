var express = require('express');   // import module
var app = express();    // instance of express

app.use(express.static(__dirname + '/public'));     // current directory in public folder

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/', function (req, res) {
    res.send('hello world');
})


app.listen(port, ipaddress);
