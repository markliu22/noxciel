import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function ImageModal({ imageUrl, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto'; // Restore scrolling when modal closes
    };
  }, [onClose]);

  return createPortal(
    <div className="modal active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <span className="close" onClick={onClose}>&times;</span>
      <div className="modal-content">
        <img src={imageUrl} alt="Full size artwork" />
      </div>
    </div>,
    document.body
  );
} 