const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");
const Actor = require("./Actor")

// n --> m relation
Movie.belongsToMany(Genre, {through: 'MoviesGenres'});
Genre.belongsToMany(Movie, {through: 'MoviesGenres'});

// n --> m relation
Movie.belongsToMany(Director, {Through: 'MoviesDirectors'})
Director.belongsToMany(Movie, {Through: 'MoviesDirectors'})

// n --> m relation
Movie.belongsToMany(Actor, {Through: 'MoviesActors'})
Actor.belongsToMany(Movie, {Through: 'MoviesActors'})

