var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(__dirname));

app.get('/', (req, res) =>{
	res.render('index', {title: 'Golden Storage'.toUpperCase()});
});

app.listen(3000, () => {
	console.log("listening on 3000");
});