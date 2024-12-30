import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function ImageModal({ imageUrl, title, description, onClose, onNext, onPrevious }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrevious]);

  return createPortal(
    <div className="modal active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <span className="close" onClick={onClose}>&times;</span>
      <div className="modal-navigation">
        <button className="nav-button prev" onClick={onPrevious}>&lt;</button>
        <button className="nav-button next" onClick={onNext}>&gt;</button>
      </div>
      <div className="modal-content">
        <img src={imageUrl} alt={title} />
        <div className="modal-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>,
    document.body
  );
} 