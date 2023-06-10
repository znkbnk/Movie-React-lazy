import React from 'react';

function Movie({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Released: {movie.releaseYear}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default Movie;
