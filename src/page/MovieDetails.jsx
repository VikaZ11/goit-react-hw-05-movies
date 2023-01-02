import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { BackLink } from '../components/BackLink';
import { getMovieById } from 'api';
import { IMAGE_URL } from 'api';
import { Img, Wrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, poster_path, overview, genres, vote_average, release_date } =
    movie;

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Wrapper>
        <Img src={`${IMAGE_URL}${poster_path}`} alt={`${title}`} />
        <div>
          <h2>
            {title} ({release_date.substring(0, 4)})
          </h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name + ' ')}</p>
        </div>
      </Wrapper>
      <p>Additional information:</p>
      <ul>
        <li>
          <NavLink to={`cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
