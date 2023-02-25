const router = require('express').Router();
require('dotenv').config();
const axios = require('axios');
const API_KEY = process.env.Api_Key;

const baseUrl = "https://api.themoviedb.org/3"

const request = {
    fetchNetflix: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213&with_type=0&sort_by=first_air_date.asc`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAction : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    };

    const movies = (word) => {
        console.log(request[word])
        return (axios.get(`${baseUrl}${request[word]}`)
            .then(res => {
                // console.log('hello');
                return res.data
            })
            .catch(error => console.log(error))
        );
    }

    router.get(`/api/:searchGenre`, async (req, res) => {
        try {
            res.json(await movies(req.params.searchGenre));
        } catch (err) {
            res.json(err);
        }
    } );

    module.exports = router;