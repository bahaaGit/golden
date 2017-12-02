var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/test', (req, res) =>{
	res.render('index');
});

app.listen(3000, () => {
	console.log("listening on 3000");
});