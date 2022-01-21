import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Load from '../../components/Loader';
import { getByQuery } from '../../services/apiServise';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Gallery, Item, Poster } from '../Home/Home.style';

function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!query) {
      return;
    }

    setStatus('pending');
    const fetch = async () => {
      try {
        const movies = await getByQuery(query);
        if (movies.lenght === 0) {
          toast.error('Nothing found');
          return setStatus('idle');
        } else setMovies(movies);
        setStatus('resolved');
      } catch (error) {
        toast.error('Sorry, we have a problem');
      }
    };
    fetch();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={setQuery}></SearchBar>
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
              <Link to={`/movies/${movie.id} `} key={movie.id}>
                <Item>
                  <Poster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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