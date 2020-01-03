console.log("I'm connected");

const button = document.getElementById('randomMovie');
const output = document.getElementById('output');
var movieData = {};

// Get JSON data
 $.getJSON("movie-app/movieData.json", function(data) {
  console.log(data);
  // Declare global var for JSON data
  movieData = data;
});


function randomMovie() {
    //Pick random number less than array length
    var num = Math.floor(Math.random() * movieData.movies.length);
    //Return movie name of random index position
    return movieData.movies[num].name;
}

//Add event listener
button.addEventListener("click", function() {
  //Insert result of randomMovie() into html
  output.innerHTML = randomMovie();
});
