var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

var fortunes = [
"Conquer your fears or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];





app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res, next) {
    var randomForune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {fortune: randomForune});
})



//404
app.use(function (req, res) {
    res.type('text/plain');
    res.render('404');
});

//500
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
})

app.listen(app.get('port'), function () {
    console.log('Express started on http//localhost:' + app.get('port'))
});
