import { Route, Routes } from 'react-router-dom';
import { lazy} from 'react';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../page/Home'));
const Movies = lazy(() => import('../page/Movies'));
const MovieDetails = lazy(() => import('../page/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};
