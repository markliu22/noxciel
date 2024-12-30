import { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import dragon1 from '../assets/3D/dragon1.jpg';
import dragon2 from '../assets/3D/dragon2.jpg';
import dragon3 from '../assets/3D/dragon3.jpg';
import dragon4 from '../assets/3D/dragon4.jpg'; 
import dragon5 from '../assets/3D/dragon5.jpg';
import dragon6 from '../assets/3D/dragon6.jpg';
import dragon7 from '../assets/3D/dragon7.jpg';
import dragon8 from '../assets/3D/dragon8.jpg';
import dragon9 from '../assets/3D/dragon9.jpg';
import dragon10 from '../assets/3D/dragon10.jpg';
import sword1 from '../assets/3D/sword1.jpg';
import sword2 from '../assets/3D/sword2.jpg';
import sword3 from '../assets/3D/sword3.jpg';
import sword4 from '../assets/3D/sword4.jpg';
import deadpool1 from '../assets/3D/deadpool1.jpg';
import deadpool2 from '../assets/3D/deadpool2.jpg';
import deadpool3 from '../assets/3D/deadpool3.jpg';
import cz1 from '../assets/3D/cz1.jpg';
import cz2 from '../assets/3D/cz2.jpg';

interface Image {
    id: string;
    thumbnail: string;
    fullSize: string;
    title: string;
    description: string;
    category: string;
    relatedImages?: {
        fullSize: string;
        description: string;
    }[];
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
                        thumbnail: dragon1, // TODO: change to thumbnail version
                        fullSize: dragon1,
                        title: 'Blue-Eyes White Dragon',
                        description: 'Work in progress of a Blue-Eyes White Dragon.',
                        category: '3d',
                        relatedImages: [
                            {
                                fullSize: dragon2,
                                description: 'Side view.'
                            },
                            {
                                fullSize: dragon3,
                                description: 'Back view.'
                            },
                            {
                                fullSize: dragon4,
                                description: 'Head.'
                            },
                            {
                                fullSize: dragon5,
                                description: ''
                            },
                            {
                                fullSize: dragon6,
                                description: ''
                            },
                            {
                                fullSize: dragon7,
                                description: ''
                            },
                            {
                                fullSize: dragon8,
                                description: ''
                            },
                            {
                                fullSize: dragon9,
                                description: ''
                            },
                            {
                                fullSize: dragon10,
                                description: ''
                            },
                        ]
                    },
                    {
                        id: '2',
                        thumbnail: sword1,
                        fullSize: sword1,
                        title: 'Fiend Sword',
                        description: 'Modelling and retopology done in Maya. Textures made in Substance Painter. Lighting and rendering done in Blender Cycles.',
                        category: '3d',
                        relatedImages: [
                            {
                                fullSize: sword2,
                                description: 'Back view.'
                            },
                            {
                                fullSize: sword3,
                                description: 'Side view.'
                            },
                            {
                                fullSize: sword4,
                                description: 'Blueprint.'
                            },
                        ]
                    },
                    {
                        id: '3',
                        thumbnail: deadpool1,
                        fullSize: deadpool1,
                        title: 'Deadpool Model',
                        description: 'A model of Deadpool made in Blender, with textures done in Substance Painter.',
                        category: '3d',
                        relatedImages: [
                            {
                                fullSize: deadpool2,
                                description: 'Back view.'
                            },
                            {
                                fullSize: deadpool3,
                                description: 'Sword.'
                            },
                        ]
                    },
                    {
                        id: '4',
                        thumbnail: cz1,
                        fullSize: cz1,
                        title: 'CZ 75 SP-01 Shadow',
                        description: 'This is my first fully completed 3D asset, the CZ 75 SP-01 Shadow. I went through the multiple learning curves of modelling, texturing, lighting and rendering.',
                        category: '3d',
                        relatedImages: [
                            {
                                fullSize: cz2,
                                description: 'Blueprint.'
                            },
                        ]
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