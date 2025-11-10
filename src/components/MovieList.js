import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (!movies.length) {
    return <p className="movie-list__empty">No movies found. Try adjusting your filters or add a new one.</p>;
  }

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </section>
  );
};

export default MovieList;
