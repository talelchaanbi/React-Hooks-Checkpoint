import { useMemo, useState } from 'react';

// Holds filter state and returns derived filteredMovies from a movies array
const useMovieFilters = (movies) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = useMemo(() => {
    const normalizedTitle = titleFilter.trim().toLowerCase();
    return movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(normalizedTitle);
      const matchesRating = movie.rating >= ratingFilter;
      return matchesTitle && matchesRating;
    });
  }, [movies, titleFilter, ratingFilter]);

  return {
    titleFilter,
    setTitleFilter,
    ratingFilter,
    setRatingFilter,
    filteredMovies,
  };
};

export default useMovieFilters;
