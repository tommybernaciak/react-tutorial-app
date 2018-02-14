import Actions from '../actions/Actions';
const $ = window.jQuery

class API {

  searchMovies(movie) {
    $.ajax({
      url: 'https://omdbapi.com/?apikey=3bc3d08&s=' + movie.title,
      dataType: 'json',
      cache: false,
      success: function(data) {
        Actions.showMovieResults(data.Search);
      },
      error: function(xhr, status, err) {
        alert(err);
      }
    });
  }
}

export default new API();
