import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/apiServise';
import MovieInfo from '../../components/MovieInfo/MovieInfo';

function AboutMovie() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const movie = await getMovieDetails(movieId);
      setMovie(movie);
    };
    fetch();
  }, [movieId]);

  return <MovieInfo movie={movie} />;
}

export default AboutMovie;
