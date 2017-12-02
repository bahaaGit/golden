var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) =>{
	res.render('index', {site: 'Hello', ph: 'Hello World'});
});

app.listen(3000, () => {
	console.log("listening on 3000");
});