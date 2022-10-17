//STEP 1
let movies = ['Ironman', 'Cars', 'Blue', 'Robot', 'Spiderman'];
window.console.log(movies[1]);

//STEP 2
let movies = new Array(5);

movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";

window.console.log(movies[0]);


//STEP 3
let movies = new Array(5);
movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";

window.console.log(movies[0]);

movies.splice(2,0,'Inception');
window.console.log(movies.length);


//STEP 4
var movies = []
movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";

delete movies[0];
window.console.log(movies);

//STEP 5
var movies = []
movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";
movies[5] = "Inception";
movies[6] = "Tenet";

for (let i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}


//STEP 6
var movies = []
movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";
movies[5] = "Inception";
movies[6] = "Tenet";

var movie;
for (movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        windows.console.log(movies[movie]);
    }
}

//STEP 7

var movies = []
movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";
movies[5] = "Inception";
movies[6] = "Tenet";

movies.sort();

var movie;
for (movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        windows.console.log(movies[movie]);
    }
}
//STEP 8

var movies = []
movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";
movies[5] = "Inception";
movies[6] = "Tenet";


var leastFavMovies = ['Life of pi', 'Venom', 'Death Race'];
window.console.log("Movies I love: \n \n");
var movie;
for (movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        windows.console.log(movies[movie]);
    }
}

window.console.log("\n\nMovies I regret watching are:\n\n");
var movieL;
for (movieL in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(movieL)) {
        windows.console.log(mleastFavMoviesovies[movieL]);
    }
}

//STEP 9
var movies = []
movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";
movies[5] = "Inception";
movies[6] = "Tenet";

var leastFavMovies = ['Life of pi', 'Venom', 'Death Race'];
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

var movie;
for (movie in movies) {
    if (movies.hasOwnProperty(movie)) {
        windows.console.log(movies[movie]);
    }
}

//STEP 10

var movies = []
movies[0] = "Ironman";
movies[1] = "Cars";
movies[2] = "Blue";
movies[3] = "Robot";
movies[4] = "Spiderman";
movies[5] = "Inception";
movies[6] = "Tenet";

var leastFavMovies = ['Life of pi', 'Venom', 'Death Race'];
movies = movies.concat(leastFavMovies);

window.console.log(movies.pop());