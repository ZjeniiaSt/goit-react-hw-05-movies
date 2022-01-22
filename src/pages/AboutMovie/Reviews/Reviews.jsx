import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../../services/apiServise';
import propTypes from 'prop-types';

function Reviews({ scrollRef }) {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const reviews = await getReviews(movieId);
        setReviews(reviews);
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId, scrollRef]);

  if (reviews.length === 0) {
    return (
      <h3 style={{ paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        We dont have any reviews for this movie
      </h3>
    );
  }
  return (
    <div ref={scrollRef}>
      <ul>
        {reviews.map(rev => {
          return (
            <li key={rev.id}>
              <h3 style={{ paddingTop: '40px', paddingBottom: '10px', textAlign: 'center' }}>
                Author: {rev.author}
              </h3>
              <p>{rev.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Reviews.propTypes = {
  scrollRef: propTypes.object,
};

export default Reviews;
