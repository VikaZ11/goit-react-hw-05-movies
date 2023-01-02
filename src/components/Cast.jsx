import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'api';
import { IMAGE_URL } from 'api';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(setCasts);
  }, [movieId]);

  if (!casts) {
    return null;
  }

  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img src={`${IMAGE_URL}${cast.profile_path}`} alt={`${cast.name}`} />
          <p>{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
