const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => (
  <section className="filter">
    <label className="filter__group">
      <span className="filter__label">Filter by title</span>
      <input
        className="filter__input"
        type="text"
        placeholder="e.g. Inception"
        value={titleFilter}
        onChange={(event) => onTitleChange(event.target.value)}
      />
    </label>
    <label className="filter__group">
      <span className="filter__label">Minimum rating</span>
      <input
        className="filter__input"
        type="number"
        min="0"
        max="10"
        step="0.1"
        value={ratingFilter}
        onChange={(event) => onRatingChange(Number(event.target.value) || 0)}
      />
    </label>
  </section>
);

export default Filter;
