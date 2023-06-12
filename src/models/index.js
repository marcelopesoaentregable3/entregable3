const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");
const Actor = require("./Actor")

// n --> m relation
Movie.belongsToMany(Genre, {through: 'MoviesGenres'});
Genre.belongsToMany(Movie, {through: 'MoviesGenres'});

// n --> m relation
Movie.belongsToMany(Director, {through: 'MoviesDirectors'})
Director.belongsToMany(Movie, {through: 'MoviesDirectors'})

// n --> m relation
Movie.belongsToMany(Actor, {through: 'MoviesActors'})
Actor.belongsToMany(Movie, {through: 'MoviesActors'})

