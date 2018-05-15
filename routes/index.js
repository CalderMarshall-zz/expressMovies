// include express duh
var express = require('express');
//set up router from the express module
var router = express.Router();

//get request. we have this because we npm installed it we need it to make http requests
const request = require('request');
//get db credentials from config
//set base urls

const creds = require("../config/creds");
const apiBaseUrl = `http://api.themoviedb.org/3`;
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${creds.api_key}`;

const imageBaseUrl = `http://image.tmdb.org/t/p/w300`;

/* GET home page. */

router.get('/', function(req, res, next) {
  //  go to the movie API and get the current playing data
    request.get(nowPlayingUrl,(error,response,movieData)=>{
        const parsedData = JSON.parse(movieData);
        console.log(parsedData);
        res.render('index', {
            nowPlayingData: parsedData.results,
            imageBaseUrl: imageBaseUrl,
        });
    });

});
router.get('/movie/:movieId', (req, res)=>{
    // res.json(req.params);
    const movieId = req.params.movieId;
//    build the api url for this movie
    const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${creds.api_key}`;
    request.get(thisMovieUrl, (error, response, movieData)=>{
        const parsedData = JSON.parse(movieData);
        // res.json(parsedData);

        res.render('single-movie',{
            currentMovie: parsedData,
            imageBaseUrl
        })
    })
});


module.exports = router;
