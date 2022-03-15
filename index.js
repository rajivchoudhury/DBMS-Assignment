const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//parse Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

// Templating engine
app.engine('hbs', exphbs.engine( {extname: '.hbs'}));
app.set('view engine', 'hbs');

//Router
app.get('', (req, res) => {
    res.render('home');
});


app.listen(port, ()=> console.log(`Listening on port ${port}`));