// Document Ready Block Scene it Pt 1:

document.addEventListener("DOMContentLoaded", function() {
  function renderMovies(movieArray) {
    var movieHTML = movieArray.map(
      currentMovie =>
        `<div class="movie m-2">
            <div class="card" style="width: 18rem; height: 35rem;">
              <img src="${
                currentMovie.Poster
              }" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}</h5>
                <a href="#" class="btn btn-primary">Add</a>
              </div>
            </div>
          </div>`
    );
    return movieHTML.join("");
  }
  document
    .getElementById("search-form")
    .addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("movies-container").innerHTML = renderMovies(
        movieData
      );
    });
  // Pt 2 step 8, commented out no longer using
  //   document.getElementById("movies-container").innerHTML = renderMovies(
  //     movieData
  //   );
});
