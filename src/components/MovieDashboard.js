import Filter from './Filter';
import AddMovieModal from './AddMovieModal';
import MovieList from './MovieList';
import useMovies from '../hooks/useMovies';
import useMovieFilters from '../hooks/useMovieFilters';

const MovieDashboard = () => {
  const { movies, addMovie } = useMovies();
  const {
    titleFilter,
    setTitleFilter,
    ratingFilter,
    setRatingFilter,
    filteredMovies,
  } = useMovieFilters(movies);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Movie Night Planner</h1>
        <p className="app__subtitle">
          Ajoutez vos films favoris et filtrez par titre ou note.
        </p>
      </header>
      <main className="app__content">
        <section className="app__controls">
          <Filter
            titleFilter={titleFilter}
            ratingFilter={ratingFilter}
            onTitleChange={setTitleFilter}
            onRatingChange={setRatingFilter}
          />
          <AddMovieModal onAdd={addMovie} />
        </section>
        <section className="app__results">
          <MovieList movies={filteredMovies} />
        </section>
      </main>
    </div>
  );
};

export default MovieDashboard;
