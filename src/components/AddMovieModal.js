import { useState } from 'react';
import AddMovie from './AddMovie';

const AddMovieModal = ({ onAdd }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAdd = (movie) => {
    onAdd(movie);
    setOpen(false);
  };

  return (
    <>
      <button className="add-movie__open-btn" onClick={handleOpen}>
        Ajouter un film
      </button>
      {open && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>&times;</button>
            <AddMovie onAdd={handleAdd} />
          </div>
        </div>
      )}
    </>
  );
};

export default AddMovieModal;
