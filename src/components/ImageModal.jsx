import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function ImageModal({ image, onClose, onNext, onPrevious }) {
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
      <div className="modal-container">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-navigation">
          <button className="nav-button prev" onClick={onPrevious}>&lt;</button>
          <button className="nav-button next" onClick={onNext}>&gt;</button>
        </div>
        
        <div className="modal-content">
          <div className="modal-info">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>

          {/* Main image */}
          <div className="image-container">
            <img src={image.fullSize} alt={image.title} />
          </div>

          {/* Related images */}
          {image.relatedImages?.map((related, index) => (
            <div key={index} className="image-container">
              <img src={related.fullSize} alt={`${image.title} - View ${index + 2}`} />
              <p className="image-description">{related.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
} 