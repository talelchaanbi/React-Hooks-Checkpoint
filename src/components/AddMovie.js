import { useState } from 'react';

const INITIAL_STATE = {
  title: '',
  description: '',
  posterURL: '',
  rating: '',
};

const AddMovie = ({ onAdd }) => {
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = formState.title.trim();
    const trimmedDescription = formState.description.trim();
    const trimmedPosterURL = formState.posterURL.trim();
    const parsedRating = parseFloat(formState.rating);

    if (!trimmedTitle || !trimmedDescription || !trimmedPosterURL || Number.isNaN(parsedRating)) {
      return;
    }

    onAdd({
      title: trimmedTitle,
      description: trimmedDescription,
      posterURL: trimmedPosterURL,
      rating: parsedRating,
    });

    setFormState(INITIAL_STATE);
  };

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <h2 className="add-movie__title">Add a new movie</h2>
      <label className="add-movie__group">
        <span className="add-movie__label">Title</span>
        <input
          className="add-movie__input"
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="Movie title"
          required
        />
      </label>
      <label className="add-movie__group">
        <span className="add-movie__label">Description</span>
        <textarea
          className="add-movie__input add-movie__textarea"
          name="description"
          value={formState.description}
          onChange={handleChange}
          placeholder="Brief synopsis"
          rows={4}
          required
        />
      </label>
      <label className="add-movie__group">
        <span className="add-movie__label">Poster URL</span>
        <input
          className="add-movie__input"
          type="url"
          name="posterURL"
          value={formState.posterURL}
          onChange={handleChange}
          placeholder="https://example.com/poster.jpg"
          required
        />
      </label>
      <label className="add-movie__group">
        <span className="add-movie__label">Rating</span>
        <input
          className="add-movie__input"
          type="number"
          name="rating"
          value={formState.rating}
          onChange={handleChange}
          min="0"
          max="10"
          step="0.1"
          placeholder="e.g. 8.5"
          required
        />
      </label>
      <button className="add-movie__submit" type="submit">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
