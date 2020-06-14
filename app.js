require("dotenv").config();
var express = require('express');
var helmet = require('helmet');
var compression = require('compression');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./src/routes');

var knex = require("knex")({
    client : 'mssql',
    connection: {
        server : process.env.MSSQL_SERVER,
        user : process.env.MSSQL_USER,
        password : process.env.MSSQL_PASS,
        options: {
            port: process.env.MSSQL_PORT,
            database : process.env.MSSQL_DATABASE,
            encrypt: true
        }
    }
});

var app = express();

app.use(logger('dev'));
app.use(helmet())
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

module.exports = app;
