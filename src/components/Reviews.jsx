import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReview } from 'api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReview(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      {reviews.length === 0 && (
        <p>We don`t have any reviews for this movie.</p>
      )}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>"{review.content}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
