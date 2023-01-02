import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE_URL } from 'api';
import { Container, CardWrapper, MovieName } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
            <MovieName>{movie.title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};