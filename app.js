var express = require("express"); //Import express to use as our webserver
var bodyParser = require("body-parser"); //Import bodyParser so we can read request body data
var express = require("express");
var app = express();
//app.set('view engine', 'ejs')
app.set('view engine', 'pug');
app.use(express.static(__dirname));


//Use bodyParser to read request body data
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use('assets', express.static('assets'));

function authMiddleware(req, res, next) {
    //Make sure a token was given
    return next();
};

//Hello World Endpoint
app.get('/', function(req, res) {
    res.render('index', { title: 'Golden Storage'.toUpperCase(), message: '	Hello there!' });
    //return res.send("Hello World");
    //res.sendfile(__dirname + '/abn.html');
});

app.get('/', function(req, res) {
    res.render('index', { 'Hello': 'Hello Buddy is this the homepage' });
});
app.get('/login', function(req, res) {
    res.render('login', { 'login': 'Please login here' });
});

app.get('/registeraccounts', function(req, res) {
    res.render('registeraccounts', { 'registeraccounts': 'Yo! am just here so i can get paid' });
});
app.get('/hostaccounts', function() {

    res.render('hostaccounts', { 'hostaccounts': 'Please show me the crazy hosts' });

});
app.get('/portal', function(req, res) {
    res.render('portal', { 'portal': 'portal' });
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Running server on port " + port);
});