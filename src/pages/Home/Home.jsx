import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Gallery, Item, Poster } from './Home.style';
import { getTrendingMovies } from '../../services/apiServise';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Gallery>
        {trendingMovies.map(movie => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            <Item key={movie.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Item>
          </NavLink>
        ))}
      </Gallery>
      <Outlet />
    </>
  );
}
export default Home;
