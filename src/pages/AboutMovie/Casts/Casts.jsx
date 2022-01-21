import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../../services/apiServise';

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const cast = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => {
        return (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={actor.original_name}
              width="200px"
            />
            <p>{actor.origin_name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default Cast;
