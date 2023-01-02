import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import { MoviesList } from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>

      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
