var bodyParser = require("body-parser");
var mongoose = require('mongoose');

mongoose.connect('mongodb://abah:abah@ds133776.mlab.com:33776/golden');
var postSchema = new mongoose.Schema({ address: String, town: String, zipcode: String, host: String, phone: String});
var userSchema = new mongoose.Schema({ username: String, password: String, address: String, phone: String, dod: String });

postSchema.methods.getMapUrl = function() {
    var req = this.address;
    req += ", ";
    var temp = this.town.replace("-", "");
    req += temp;
    req = req.replace("  ", " ");
    req = req.replace(/ /g, "+");

    var mapURL = "https://maps.googleapis.com/maps/api/staticmap?center=";
    var apiKey = "&key=AIzaSyBCRzpLARuNB2qrxt2YEdzwGtwrEF-P-Ig"; // our API key
    var params = "&zoom=15&size=350x200";
    var markers = "&markers=size:mid%7Ccolor:red%7C";
    markers += req;

    params += markers;
    params += apiKey;
    mapURL += req;
    mapURL += params;
    return mapURL;
};

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

        db_users.find({ username: 'abah', password: 'abah' }, function(err, data) {
            if (err) throw err;
        });
        console.log(data);
        res.redirect(307, '/hostprofile');
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

        var user = req.body;

        // console.log(req.body);
        // res.render('listings');
    });

    app.get('/portal', (req, res) => {
        res.render('portal', { 'portal': 'portal' });
    });
};