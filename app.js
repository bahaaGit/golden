var express = require("express"); //Import express to use as our webserver
var bodyParser = require("body-parser"); //Import bodyParser so we can read request body data
var express = require("express");
var controler = require('./controller');
var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname));

//Use bodyParser to read request body data
//app.use(bodyParser.json());
app.use('assets', express.static('assets'));

controler(app);

var port = process.env.PORT || 3000;
var url = 'localhost:' + port;


app.listen(port, () => {
    console.log("Running on localhost:" + port);
});