var posts = [];
var data = {
    address: '351 Test Avenue',
    town: 'West Lafayette, IN 47906',
    zipcode: '47906',
    host: 'Anthony Stark'
    getMapUrl: function() {
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
    }
}
for (var i = 0; i < 9; i++) {
    posts.push(data);
}

module.exports = function(app) {

    var auth = false;
    var user;

    var bodyParser = require("body-parser"); //Import bodyParser so we can read request body data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    function authMiddleware(req, res, next) {
        //Make sure a token was given
        return next();
    };


    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/login', (req, res) => {
        user = req.body.userID.toUpperCase();
        auth = true;
        res.status(200).send('success');
    });

    app.get('/hostprofile', (req, res) => {
        //querry db
        res.render('hostprofile', { posts: posts });
    });

    app.post('/hostprofile', function(req, res) {
        posts.push(req.body);
        // res.json(posts);
        res.render('hostprofile', { posts: posts });
    });

    app.delete('/hostprofile/:item', function(req, res) {
        data = posts.filter(function(post) {
            return posts.posts.replace(/ /g, '-') !== req.param.item;
        });
    });

    app.all('/listings', (req, res) => {
        res.render('listings', { posts: posts, user: user, auth: auth });
    });

    app.post('/register', (req, res) => {
        user = req.body.userID.toUpperCase();
        auth = true;
        res.status(200).send('success');
    });

    app.get('/portal', (req, res) => {
        res.render('portal', { portal: 'portal' });
    });
}