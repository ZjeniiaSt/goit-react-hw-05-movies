import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../../services/apiServise';
import { CastsList, CastItem, Photo, Name, ItemDescr, Character } from './Casts.styled';

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
    <div>
      <CastsList>
        {cast.map(actor => {
          return (
            <CastItem key={actor.cast_id}>
              <Photo
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : 'https://pomogaetsrazu.ru/images/offers/2829219234.jpg'
                }
                alt={actor.original_name}
                width="200px"
              />
              <ItemDescr>
                <Name>{actor.original_name}</Name>
                <Character>
                  Character:<p></p>
                  {actor.character}
                </Character>
              </ItemDescr>
            </CastItem>
          );
        })}
      </CastsList>
    </div>
  );
}
export default Cast;
