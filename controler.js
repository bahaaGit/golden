var posts = [];
var data = {
    address: '351 Test Avenue',
    town: 'West Lafayette, IN 47906',
    zipcode: '47906',
    host: 'Anthony Stark'
}
for (var i = 0; i < 9; i++) {
    posts.push(data);
}

var bodyParser = require("body-parser"); //Import bodyParser so we can read request body data

module.exports = function(app) {
    //bodyParser.urlencoded({ extended: true }));
    var urlencodedParser = bodyParser.urlencoded({ extended: false });


    function authMiddleware(req, res, next) {
        //Make sure a token was given
        return next();
    };


    app.get('/', (req, res) => {
        res.render('index');
    });


    app.post('/login', (req, res) => {
        //res.redirect(307, '/listings');
        res.redirect(307, '/hostprofile');
    });

    app.get('/hostprofile', (req, res) => {
        //querry db
        res.render('hostprofile', { posts: posts });
    });

    app.post('/hostprofile', urlencodedParser, function(req, res) {
        posts.push(req.body);
        res.json(posts);
        //res.render('hostprofile', { posts: posts });
    });

    app.delete('/hostprofile/:item', function(req, res) {

        data = posts.filter(function(post) {
            return posts.posts.replace(/ /g, '-') !== req.param.item;
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