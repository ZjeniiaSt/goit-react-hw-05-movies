import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Load from '../../components/Loader';
import { Container, Gallery, Item, Poster } from './Home.style';
import { getTrendingMovies } from '../../services/apiServise';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setStatus('pending');
    const fetch = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
        setStatus('resolved');
      } catch (error) {
        toast.error('Sorry, we have a problem');
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Toaster />
      {status === 'pending' && (
        <div>
          <Load />
        </div>
      )}
      {status === 'resolved' && (
        <Container>
          <Gallery>
            {trendingMovies.map(movie => (
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }} key={movie.id}>
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
        </Container>
      )}
    </>
  );
}
export default Home;
