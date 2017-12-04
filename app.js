var express = require("express"); //Import express to use as our webserver
var bodyParser = require("body-parser"); //Import bodyParser so we can read request body data
var express = require("express");
var app = express();
var reload = require('reload');
//app.set('view engine', 'ejs')
app.set('view engine', 'pug');
app.use(express.static(__dirname));

//Use bodyParser to read request body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('assets', express.static('assets'));

function authMiddleware(req, res, next) {
    //Make sure a token was given
    return next();
};

var port = process.env.PORT || 3000;
var url = 'localhost:' + port;

//Hello World Endpoint
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
    res.redirect(307, '/listings');
});

app.all('/listings', (req, res) => {
    res.render('listings');
});

app.post('/register', (req, res) => {
    
});
app.get('/hostaccounts', () => {
    res.render('hostaccounts', { 'hostaccounts': 'Please show me the crazy hosts' });

});
app.get('/portal', (req, res) => {
    res.render('portal', { 'portal': 'portal' });
});

reload(app);

app.listen(port, () => {
    console.log("Running on localhost:" + port);
});