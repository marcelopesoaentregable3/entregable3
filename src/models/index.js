const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");


Movie.belongsToMany(Genre, {through: 'MoviesGenres'});
Genre.belongsToMany(Movie, {through: 'MoviesGenres'});

Movie.belongsToMany(Director, {Through: 'MoviesDirectors'})
Director.belongsToMany(Movie, {Through: 'MoviesDirectors'})