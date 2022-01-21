import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  Container,
  Button,
  BaseInfo,
  Poster,
  Description,
  Title,
  Subtitle,
  StyledNavLink,
} from './MovieInfo.style';

function MovieInfo({ movie }) {
  console.log(movie);
  const navigate = useNavigate();

  return (
    <Container>
      <Button type="button" onClick={() => navigate(-1)}>
        Go back
      </Button>
      {movie && (
        <Container>
          <BaseInfo>
            <Poster
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              width="250px"
            />
            <Description>
              <Title>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </Title>
              <Subtitle>Overview:</Subtitle>
              <p>{movie.overview}</p>

              <Subtitle>User Score: {movie.vote_average} </Subtitle>

              <Subtitle>Genres</Subtitle>
              <ul>
                {movie.genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </ul>
            </Description>
          </BaseInfo>

          <div>
            <Subtitle>Additional information</Subtitle>
            <ul>
              <li>
                <StyledNavLink to="cast">Cast</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="reviews">Reviews</StyledNavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </Container>
      )}
    </Container>
  );
}

export default MovieInfo;
