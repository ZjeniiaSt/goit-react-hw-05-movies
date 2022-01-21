import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../../services/apiServise';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const reviews = await getReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We dont have any reviews for this movie</p>;
  }
  return (
    <ul>
      {reviews.map(rev => {
        return (
          <li key={rev.id}>
            Author: {rev.author} <p>{rev.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default Reviews;
