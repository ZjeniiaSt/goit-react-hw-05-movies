import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../services/apiServise';
import MovieInfo from '../../../components/MovieInfo';

export default function AboutMovie() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId]);

  return <MovieInfo movie={movie} />;
}
