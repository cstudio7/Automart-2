const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");


const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


module.exports = app;