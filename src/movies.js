// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const movies = require("./data");

// const movies = require("./data")
// console.log(movies);

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  return allDirectors;
}
// getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function getSpielberg(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return movie;
    }
  });
  return dramaMovies.length;
}
// getSpielberg(movies);

// howManyMovies(movies)
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies
/* "TODO"
- use .map() to get average score of all drama movies
- use conditional to check if the movie is a drama
- maybe create avgScore var 
*/
function dramaMoviesScore(moviesArray) {
  // const avgScore = moviesArray.map((movie) => {
  //   if (movie.genre === "Drama") {
  //     return movie.score
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedMovies = [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  // console.log(orderedMovies);
  return orderedMovies;

  // return orderedMovies = [...moviesArray].sort((a, b) => a.year - b.year)
}
// orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/* 
- first we create a new var and set it = to a new hard copy of the array
- we then use the sort method with localecompare
- then in order to get the first 20 , we use slice to get from 0, 20
*/
function orderAlphabetically(moviesArray) {
  const newArr = [...moviesArray].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  // console.log(newArr.slice(0, 20));
  return newArr.slice(0, 20)
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
