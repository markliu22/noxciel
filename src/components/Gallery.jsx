import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageModal } from './ImageModal';
import { useImages } from '../hooks/useImages';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { category } = useParams();
  const { images, isLoading, error } = useImages(category);

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    
    setSelectedImage(images[newIndex]);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading images: {error}</div>;

  return (
    <>
      <div className="gallery-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.thumbnail}
              alt={image.title}
              className="thumbnail"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() => navigateImage('next')}
          onPrevious={() => navigateImage('prev')}
        />
      )}
    </>
  );
} 