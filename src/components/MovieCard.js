import { useEffect, useState } from 'react';

const FALLBACK_POSTER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="100%25" height="100%25" fill="%23161d2f"/><text x="50%25" y="50%25" fill="%238ea1c0" font-family="Segoe UI, Tahoma, Geneva, Verdana, sans-serif" font-size="24" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>';

const MovieCard = ({ title, description, posterURL, rating }) => {
  const [currentSrc, setCurrentSrc] = useState(posterURL || FALLBACK_POSTER);

  useEffect(() => {
    setCurrentSrc(posterURL || FALLBACK_POSTER);
  }, [posterURL]);

  return (
    <article className="movie-card">
      <img
        className="movie-card__poster"
        src={currentSrc}
        alt={`${title} poster`}
        onError={() => setCurrentSrc(FALLBACK_POSTER)}
        loading="lazy"
      />
      <div className="movie-card__content">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__description">{description}</p>
        <span className="movie-card__rating">Rating: {rating}</span>
      </div>
    </article>
  );
};

export default MovieCard;
