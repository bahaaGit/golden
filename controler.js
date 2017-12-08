var bodyParser = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://abah:abah@ds133776.mlab.com:33776/golden');
var postSchema = new mongoose.Schema({ address: String, town: String, zipcode: String, host: String });
var userSchema = new mongoose.Schema({ username: String, password: String, address: String, phone: String, dod: String });

var db_posts = mongoose.model('Post', postSchema);
var db_users = mongoose.model('User', userSchema);


module.exports = function(app) {
    //bodyParser.urlencoded({ extended: true }));
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    app.get('/', (req, res) => {
        res.render('index');
    });


    app.post('/login', (req, res) => {
        //get data 
        var userID = req.body.userID;
        var password = req.body.password;

        //Make sure the username and password were both provided
        /*if (!userID || !password) {
            return res.status(401).json({ message: "invalid_credentials" });
        }
        db_users.find({ username: 'abah', password: 'abah' }, function(err, data) {
            if (err) throw err;
        });*/
        db_users.find({ username: 'abah', password: 'abah' }, function(err, data) {
            if (err) throw err;
        });
        console.log(data);
        res.json(data);
    });

    app.get('/hostprofile', (req, res) => {
        //querry db
        db_users.find({}, function(err, data) {
            if (err) throw err;
            //res.render('hostprofile', { posts: data });
            res.json(data);
        });

    });

    app.post('/hostprofile', urlencodedParser, function(req, res) {
        var newPost = db_posts({
            address: '351 Test Avenue',
            town: 'West Lafayette, IN 47906',
            zipcode: '47906',
            host: 'Anthony Stark'
        }).save(function(err) {
            if (err) throw err;
            console.log("save success");
        });
        res.json(posts);
    });

    app.post('/registerhost', urlencodedParser, function(req, res) {
        var newPost = db_posts({
            username: "abah",
            password: "abah",
            address: "mememe",
            phone: "9090933020",
            dod: "06/06/06"
        }).save(function(err, data) {
            if (err) throw err;
            console.log("save success");
            res.json(data);
        });

    });

    app.delete('/hostprofiledelete', function(req, res) { //hostprofile/:item'
        db_posts.find({
            address: '351 Test Avenue',
            town: 'West Lafayette, IN 47906',
            zipcode: '47906',
            host: 'Anthony Stark'
        }).remove(function(err, data) {
            if (err) throw err;
            res.json({ message: "Sucessful delete" });
            console.log("delete");
        });
    });


    app.all('/listings', (req, res) => {
        console.log(req.body)
        res.render('listings', { posts: posts });
    });

    app.post('/register', (req, res) => {
        console.log(req.body);
        res.render('listings');
    });

    app.get('/portal', (req, res) => {
        res.render('portal', { 'portal': 'portal' });
    });
};