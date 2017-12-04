module.exports = function(app) {

    var arr = [];
    var data = {
        address: '351 Test Avenue',
        town: 'West Lafayette, IN 47906',
        host: 'Anthony Stark'
    }
    for (var i = 0; i < 9; i++) {
        arr.push(data);
    }



    function authMiddleware(req, res, next) {
        //Make sure a token was given
        return next();
    };


    app.get('/', (req, res) => {
        res.render('index');
    });


    app.post('/login', (req, res) => {
        res.redirect(307, '/listings');
        res.redirect(307, '/hostprofile');
    });

    app.get('/hostprofile', (req, res) => {
        //querry db
        res.render('hostprofile', { array: arr });
    });

    app.get('/hostprofile', (req, res) => {
        res.render('hostprofile', { array: arr });
    });

    app.delete('/hostprofile', (req, res) => {});



    app.all('/listings', (req, res) => {
        console.log(req.body)
        res.render('listings', { array: arr });
    });

    app.post('/register', (req, res) => {
        console.log(req.body);
        res.render('listings');
    });



    app.get('/portal', (req, res) => {
        res.render('portal', { 'portal': 'portal' });
    });
};