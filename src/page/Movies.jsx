import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovies } from 'api';
import { MoviesList } from 'components/MoviesList';
import { Container } from './Movies.styled';
import { SearchBox } from 'components/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');

  const movieTitle = searchParams.get('query');

  const onChangeFilter = query => {
    setQuery(query);
  };

  const onSearch = e => {
    e.preventDefault();

    setSearchParams(query !== '' ? { query: query } : {});
  };

  useEffect(() => {
    if (movieTitle) {
      getSearchMovies(movieTitle).then(setMovies);
    }
  }, [movieTitle]);

  return (
    <Container>
      <SearchBox
        value={query}
        onSearch={onSearch}
        onChangeFilter={onChangeFilter}
      />

      {movies && <MoviesList movies={movies} />}

      {movies && movies.length === 0 && (
        <div>Nothing was found with that name 😕</div>
      )}
    </Container>
  );
};

export default Movies;
