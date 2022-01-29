import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Load from '../../components/Loader';
import { getByQuery } from '../../services/apiServise';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Gallery, Item, Poster } from '../Home/Home.style';

function Search() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const navigate = useNavigate();
  const navigateQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!navigateQuery) {
      return;
    }

    setStatus('pending');
    const fetch = async () => {
      try {
        const movies = await getByQuery(navigateQuery);
        if (movies.length === 0) {
          toast.error('Nothing found');
          return setStatus('idle');
        } else setMovies(movies);
        setStatus('resolved');
      } catch (error) {
        toast.error('Sorry, we have a problem');
      }
    };
    fetch();
  }, [navigateQuery]);

  function onSubmit(query) {
    setMovies(query);

    navigate({ ...location, search: `query=${query}` });
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      <Toaster />
      {status === 'idle' && <></>}
      {status === 'pending' && (
        <div>
          <Load />
        </div>
      )}
      {status === 'resolved' && (
        <>
          <Gallery>
            {movies.map(movie => (
              <Link to={`/movies/${movie.id} `} state={{ from: location }} key={movie.id}>
                <Item>
                  <Poster
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://pomogaetsrazu.ru/images/offers/2829219234.jpg'
                    }
                    alt={movie.title}
                  />
                </Item>
              </Link>
            ))}
          </Gallery>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default Search;
