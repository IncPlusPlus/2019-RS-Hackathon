//Express
const express = require('express');
const app = express();
const port = 3000;

//MySQL
const mysql = require('mysql');

//EJS
const ejs = require('ejs');

//Bodyparser
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const {getHomeList, getHomeInfoPage, getSubmitPage, postSubmitPage} = require('./index');

//Establish connection to database
const db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'SQLROOT123_',
	database: 'homeinfo'
});
global.db = db;

//On connect function
db.connect(function(err) {
	if (err) throw err;
	console.log("Connected to database successfuly");
});

//Set app to listen on port
app.listen(port,() => console.log(`Server running on port ${port}!`));

//Use statements
app.use(express.static('assets'));
app.use(upload.array()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//Main home list
app.get('/',getHomeList);
//Home landing page
app.get('/home/:homeId',getHomeInfoPage);
//Submission landing page
app.get('/submit',getSubmitPage);

//Submission received handler
app.post('/submit',postSubmitPage);