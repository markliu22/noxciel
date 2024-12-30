import { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

interface Image {
    id: string;
    thumbnail: string;
    fullSize: string;
    title: string;
    description: string;
    category: string;
}

export const useImages = (category?: string) => {
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadLocalImages = async () => {
            try {
                const localImages: Image[] = [
                    {
                        id: '1',
                        thumbnail: image1,
                        fullSize: image1,
                        title: 'Image 1',
                        description: 'A stunning 3D rendered scene with dynamic lighting.',
                        category: '3d'
                    },
                    {
                        id: '2',
                        thumbnail: image2,
                        fullSize: image2,
                        title: 'Image 2',
                        description: 'Hand-drawn digital illustration showcasing vibrant colors.',
                        category: '2d'
                    },
                    {
                        id: '3',
                        thumbnail: image3,
                        fullSize: image3,
                        title: 'Image 3',
                        description: 'Traditional art piece with modern digital elements.',
                        category: '2d'
                    },
                    {
                        id: '4',
                        thumbnail: image4,
                        fullSize: image4,
                        title: 'Image 4',
                        description: 'Frame from an animated sequence demonstrating fluid motion.',
                        category: 'animation'
                    },
                ];

                // Filter images based on category
                const filteredImages = category
                    ? localImages.filter(img => img.category === category)
                    : localImages;

                setImages(filteredImages);
            } catch (err) {
                setError('Failed to load local images');
            } finally {
                setIsLoading(false);
            }
        };

        loadLocalImages();
    }, [category]);

    return { images, isLoading, error };
};