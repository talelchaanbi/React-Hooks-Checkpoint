import { useEffect, useMemo, useState } from 'react';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import './App.css';

const DEFAULT_MOVIES = [
  {
    id: 'tt4154796',
    title: 'Avengers: Endgame',
    description:
      'After the devastating events of Avengers: Infinity War, remaining heroes assemble once more to reverse Thanos\' actions.',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
    rating: 8.4,
  },
  {
    id: 'tt0903624',
    title: 'The Hobbit: An Unexpected Journey',
    description:
      'Bilbo Baggins joins Gandalf and a company of dwarves on an epic quest to reclaim the lost Dwarf Kingdom of Erebor.',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg',
    rating: 7.8,
  },
];

const App = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    setMovies(DEFAULT_MOVIES);
  }, []);

  // Keep derived movie list in sync with filters without recomputing on every render.
  const filteredMovies = useMemo(() => {
    const normalizedTitle = titleFilter.trim().toLowerCase();

    return movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(normalizedTitle);
      const matchesRating = movie.rating >= ratingFilter;
      return matchesTitle && matchesRating;
    });
  }, [movies, titleFilter, ratingFilter]);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => [
      ...prevMovies,
      {
        ...movie,
        // Generate a lightweight unique id so MovieCard keys remain stable.
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      },
    ]);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Movie Night Planner</h1>
        <p className="app__subtitle">Add your favourites and filter by what you feel like watching.</p>
      </header>

      <main className="app__content">
        <section className="app__controls">
          <Filter
            titleFilter={titleFilter}
            ratingFilter={ratingFilter}
            onTitleChange={setTitleFilter}
            onRatingChange={setRatingFilter}
          />
          <AddMovie onAdd={handleAddMovie} />
        </section>
        <section className="app__results">
          <MovieList movies={filteredMovies} />
        </section>
      </main>
    </div>
  );
};

export default App;
