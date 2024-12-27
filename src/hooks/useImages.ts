import { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

interface Image {
    id: string;
    thumbnail: string;
    fullSize: string;
    title: string;
}

export const useImages = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Simulating async loading of local images
        const loadLocalImages = async () => {
            try {
                // Define your local images here
                const localImages: Image[] = [
                    {
                        id: '1',
                        thumbnail: image1,
                        fullSize: image1,
                        title: 'Image 1'
                    },
                    {
                        id: '2',
                        thumbnail: image2,
                        fullSize: image2,
                        title: 'Image 2'
                    },
                    // Add more images as needed
                ];

                setImages(localImages);
            } catch (err) {
                setError('Failed to load local images');
            } finally {
                setIsLoading(false);
            }
        };

        loadLocalImages();
    }, []);

    return { images, isLoading, error };
};