require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose")
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./src/routes');

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection to MongoDB successful'))
    .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(helmet())
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',router);

module.exports = app;
