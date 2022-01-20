function MovieInfo({ movie }) {
  console.log(movie);

  return (
    <>
      <button type="button">Go back</button>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
        </div>
      )}
    </>
  );
}

export default MovieInfo;
