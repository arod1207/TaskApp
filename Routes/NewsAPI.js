const Router = require('express').Router();
const axios = require('axios');

const apikey = process.env.NEWSAPI;
const url = `https://api.currentsapi.services/v1/latest-news?'language=us&category=technology,sports&apiKey=${apikey}`;

Router.get('/news', (req, res) => {
    axios
        .get(url)

        .then((response) => {
            res.status(200).json(response.data);
        })
        .catch((error) => {
            res.status(500).json(error);
            console.log(error);
        });
});

module.exports = Router;
