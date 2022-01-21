import { Link, Outlet, useNavigate } from 'react-router-dom';

function MovieInfo({ movie }) {
  console.log(movie);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button type="button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            width="250px"
          />
          <div>
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
            <p>
              <b>User Score: {movie.vote_average} </b>
            </p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          </div>

          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieInfo;
