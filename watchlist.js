// Setting a variable for the element with the container for the movies.

var movieContainer = document.getElementById("movie-container");

function renderMovies(movies) {
  var moviesHTML = movies.map(function(currentMovie) {
    return `
       <div class="card m-2" style="width: 14rem;">
       <img id="movieImage"class="card-img-top" src="${
         currentMovie.Poster
       }" alt="Movie Image">
       <div class="card-body">
         <h5 id="movieTitle" class="card-title">${currentMovie.Title}</h5>
         <p id="movieYear" class="card-text">${currentMovie.Year}</p>
         
       </div>
     </div>
       `;
  });

  // Here you are joining the .map and returning it to the inner HTML of the element with the id
  // movieContainer

  return moviesHTML.join("");
}

var watchlist = localStorage.getItem("watchlist");
var watchlistJSON = JSON.parse(watchlist);

document.addEventListener("DOMContentLoaded", function() {
  console.log(watchlistJSON);

  document.getElementById("watchlist-container").innerHTML = renderMovies(
    watchlistJSON
  );
});
