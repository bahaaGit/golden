module.exports = function(app) {

    var auth = false;
    var user;

    var bodyParser = require("body-parser"); //Import bodyParser so we can read request body data
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://abah:abah@ds133776.mlab.com:33776/golden');
    var postSchema = new mongoose.Schema({ address: String, town: String, zipcode: String, host: String, phone: String});
    var userSchema = new mongoose.Schema({ username: String, password: String, address: String, zipcode: String, phone: String, dod: String });

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

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    function authMiddleware(req, res, next) {
        //Make sure a token was given
        return next();
    };


    app.get('/', (req, res) => {
        res.render('index', {auth: auth, user: user});
    });

    app.post('/login', (req, res) => {
        var user = req.body;
        db_users.find({ username: user.userID, password: user.password }, function(err, data) {
            if (err) throw err;
        });
    });

    // app.get('/hostprofile', (req, res) => {
    //     //querry db
    //     res.render('hostprofile', { posts: posts, auth: auth, user: user });
    // });

    app.get('/hostprofile', function(req, res) {
        db_posts.find({}, function(err, data) {
            if(err) throw err;
            res.render('hostprofile', { posts: data, user: user, auth: auth });
        });
    });

    app.delete('/hostprofile/:item', function(req, res) {
        data = posts.filter(function(post) {
            return posts.posts.replace(/ /g, '-') !== req.param.item;
        });
    });

    app.all('/listings', (req, res) => {
        db_posts.find({}, function(err, data) {
            if(err) throw err;
            res.render('listings', { posts: data, user: user, auth: auth });
        });
    });

    app.post('/register', (req, res) => {
        var user = req.body;

        var data = {
            userID: user.userID,
            password: user.password,
            address: user.address,
            zipcode: user.zipcode,
            phone: user.phone,
            dod: user.dob,
        }

        var addUser = new User(data);

        addUser.save(function(err, success){
            if(err) throw err;
            console.log('success');
        });

    });

    app.get('/portal', (req, res) => {
        res.render('portal', { portal: 'portal' });
    });
}