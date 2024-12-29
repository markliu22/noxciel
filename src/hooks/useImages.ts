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
                        category: 'traditional'
                    },
                    {
                        id: '2',
                        thumbnail: image2,
                        fullSize: image2,
                        title: 'Image 2',
                        category: 'concept-art'
                    },
                    {
                        id: '3',
                        thumbnail: image3,
                        fullSize: image3,
                        title: 'Image 3',
                        category: 'concept-art'
                    },
                    {
                        id: '4',
                        thumbnail: image4,
                        fullSize: image4,
                        title: 'Image 4',
                        category: 'illustrations'
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