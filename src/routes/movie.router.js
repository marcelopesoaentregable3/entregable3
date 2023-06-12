const { getAll,
      create, getOne, remove, update, setGenres, setDirectors } = require('../controllers/movie.controllers');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

routerMovie.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routerMovie.route('/:id/genres') // --> /movies/<:id>/genres
    .put(setGenres);             // --> add genres to id's movie

routerMovie.route('/:id/directors') // --> /movies/<:id>/directors
    .put(setDirectors)              // --> add directors to id's movie
    
module.exports = routerMovie;