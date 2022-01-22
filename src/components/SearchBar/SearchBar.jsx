import propTypes from 'prop-types';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { SearchbarSt, SearchFormSt, Input, Button } from './SearchBar.style';

function SearchBar(props) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const onSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error(`Enter a search word`);
      return;
    }

    props.onSubmit(query);
    navigate({ ...location, search: `query=${query}` });
    setQuery('');
  };

  return (
    <SearchbarSt>
      <SearchFormSt onSubmit={onSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={onChange}
        />
        <Button type="submit">Search</Button>
      </SearchFormSt>
    </SearchbarSt>
  );
}

SearchBar.propTypes = { onSubmit: propTypes.func.isRequired };

export default SearchBar;
