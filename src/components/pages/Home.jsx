import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/apiServise';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const movies = await getTrendingMovies();
      console.log(movies);
      setTrendingMovies(movies);
    };
    fetch();
  }, []);

  return (
    <ul>
      {trendingMovies.map(move => (
        <li key={move.id}>
          <p>{move.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${move.poster_path}`}
            width="250px"
            alt={move.title}
          />
        </li>
      ))}
    </ul>
  );
}
export default Home;
