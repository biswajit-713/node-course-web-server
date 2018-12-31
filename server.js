const express = require('express');
const hbs = require('hbs');

var app = express();

app.listen(3000, () => {
    console.log('running on port 3000');
});

hbs.registerPartials(__dirname + '/public/partials');;
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()}: ${req.method} ${req.url}`);
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
//     // next();
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Welcome',
        landingMessage: 'Welcome to my site',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.status(404);
    res.send({
        errorMessage: 'Opps! unable to fulfill your request now'
    });
});