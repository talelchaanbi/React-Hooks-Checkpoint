import { useEffect, useState } from 'react';
import { moviesData } from '../data/moviesData';

// Manages movies state and initialization from the provided dataset
const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const normalized = moviesData.map((m) => ({
      id: m.id,
      title: m.title,
      description: m.description,
      posterURL: m.posterUrl,
      rating: m.rate,
      trailer: m.trailer,
    }));
    setMovies(normalized);
  }, []);

  const addMovie = (movie) => {
    setMovies((prev) => [
      ...prev,
      { ...movie, id: `${Date.now()}-${Math.random().toString(16).slice(2)}` },
    ]);
  };

  return { movies, addMovie };
};

export default useMovies;
