import React from "react";

const MovieCard = ({ movie, selectMovie }) => {
  return (
    <div className="movie-card" onClick={()=>selectMovie(movie)}>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="movie-poster"
          alt="image"
        />
      ) : <img src="previewnotavailable.svg" className="movie-poster previewna" alt="preview not available" /> }
      <h5>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;
