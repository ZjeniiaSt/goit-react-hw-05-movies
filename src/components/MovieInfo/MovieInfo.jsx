import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

import {
  Container,
  Button,
  BaseInfo,
  Poster,
  Description,
  Title,
  Subtitle,
  AddInfo,
  Menu,
  MenuItem,
} from './MovieInfo.style';

function MovieInfo({ movie, scrollRef }) {
  const navigate = useNavigate();
  const location = useLocation();

  function onGoBack() {
    navigate(location?.state?.from ?? '/');
  }

  return (
    <Container>
      <Button type="button" onClick={onGoBack}>
        Go back
      </Button>
      {movie && (
        <Container>
          <BaseInfo>
            <Poster
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : 'https://pomogaetsrazu.ru/images/offers/2829219234.jpg'
              }
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

          <AddInfo>
            <Subtitle ref={scrollRef}>Additional information</Subtitle>
            <Menu>
              <MenuItem>
                <Link to="cast">Cast</Link>
              </MenuItem>
              <MenuItem>
                <Link to="reviews">Reviews</Link>
              </MenuItem>
            </Menu>
          </AddInfo>
          <Outlet />
        </Container>
      )}
    </Container>
  );
}

MovieInfo.propTypes = {
  movie: propTypes.object,
  scrollRef: propTypes.object,
};

export default MovieInfo;
