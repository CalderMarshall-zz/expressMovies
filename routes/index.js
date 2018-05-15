// include express duh
var express = require('express');
//set up router from the express module
var router = express.Router();

//get request. we have this because we npm installed it we need it to make http requests
const request = require('request');
//get db credentials from config
//set base urls

const creds = require("../config/creds");
const apiBaseUrl = `http://api.themoviedb/org/3`;
const nowPlayingUrl = `${apiBaseUrl}/movie/
        now_playing?api_key=${creds.api_key}`;

const imageBaseUrl = `http://image.tmdb.org/t/p/w300`;

/* GET home page. */

router.get('/', function(req, res, next) {
  //  go to the movie API and get the current playing data
  res.render('index', { title: 'Express' });
});


module.exports = router;
