const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log("Server is running on port " + port));


app.use('/employees', employeeController);