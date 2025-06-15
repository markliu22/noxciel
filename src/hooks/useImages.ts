import { useState, useEffect } from 'react';
import dragon1 from '/assets/3D/dragon1.jpg';
import dragon2 from '/assets/3D/dragon2.jpg';
import dragon3 from '/assets/3D/dragon3.jpg';
import dragon4 from '/assets/3D/dragon4.jpg'; 
import dragon5 from '/assets/3D/dragon5.jpg';
import dragon6 from '/assets/3D/dragon6.jpg';
import dragon7 from '/assets/3D/dragon7.jpg';
import dragon8 from '/assets/3D/dragon8.jpg';
import dragon9 from '/assets/3D/dragon9.jpg';
import dragon10 from '/assets/3D/dragon10.jpg';
import sword1 from '/assets/3D/sword1.jpg';
import sword2 from '/assets/3D/sword2.jpg';
import sword3 from '/assets/3D/sword3.jpg';
import sword4 from '/assets/3D/sword4.jpg';
import deadpool1 from '/assets/3D/deadpool1.jpg';
import deadpool2 from '/assets/3D/deadpool2.jpg';
import deadpool3 from '/assets/3D/deadpool3.jpg';
import cz1 from '/assets/3D/cz1.jpg';
import cz2 from '/assets/3D/cz2.jpg';
import fiend from '/assets/2D/fiend.jpg';
import phantom1 from '/assets/2D/phantom1.jpg';
import phantom2 from '/assets/2D/phantom2.jpg';
import phantom3 from '/assets/2D/phantom3.jpg';
import phantom4 from '/assets/2D/phantom4.jpg';
import ghoul1 from '/assets/2D/ghoul1.jpg';
import ghoul2 from '/assets/2D/ghoul2.jpg';
import ghouldWeapon1 from '/assets/2D/ghoulWeapon1.jpg';
import ghouldWeapon2 from '/assets/2D/ghoulWeapon2.jpg';
import officer1 from '/assets/2D/officer1.jpg';
import officer2 from '/assets/2D/officer2.jpg';
import officer3 from '/assets/2D/officer3.jpg';
import officer4 from '/assets/2D/officer4.jpg';
import officer5 from '/assets/2D/officer5.jpg';
import magician1 from '/assets/2D/magician1.jpg';
import magician2 from '/assets/2D/magician2.jpg';
import room1 from '/assets/2D/room1.jpg';
import room2 from '/assets/2D/room2.jpg';
import room3 from '/assets/2D/room3.jpg';
import power from '/assets/2D/power.jpg';
import austere from '/assets/2D/austere.jpg';
import lux1 from '/assets/2D/lux1.jpg';
import lux2 from '/assets/2D/lux2.jpg';
import killingWord from '/assets/2D/killingWord.jpg';
import iddqd1 from '/assets/2D/iddqd1.jpg';
import iddqd2 from '/assets/2D/iddqd2.jpg';
import iddqd3 from '/assets/2D/iddqd3.jpg';
import header1 from '/assets/2D/header1.jpg';
import header2 from '/assets/2D/header2.jpg';
import header3 from '/assets/2D/header3.jpg';
import header4 from '/assets/2D/header4.jpg';
import header5 from '/assets/2D/header5.jpg';
import header6 from '/assets/2D/header6.jpg';
import header7 from '/assets/2D/header7.jpg';
import lewa1 from '/assets/2D/lewa1.jpg';
import lewa2 from '/assets/2D/lewa2.jpg';
import lewa3 from '/assets/2D/lewa3.jpg';
import vengeance1 from '/assets/2D/vengeance1.jpg';
import vengeance2 from '/assets/2D/vengeance2.jpg';
import kamikaze from '/assets/2D/kamikaze.jpg';
import brs1 from '/assets/2D/brs1.jpg';
import brs2 from '/assets/2D/brs2.jpg';
import brs3 from '/assets/2D/brs3.jpg';
import brs4 from '/assets/2D/brs4.jpg';
import orbit from '/assets/2D/orbit.jpg';
import muse from '/assets/2D/muse.jpg';
import beach from '/assets/2D/beach.jpg';
import flooded from '/assets/2D/flooded.jpg';
import lazurite from '/assets/2D/lazurite.jpg';
import dtb from '/assets/2D/dtb.jpg';
import whale from '/assets/2D/whale.jpg';
import magicHands from '/assets/2D/magicHands.jpg';
import rei from '/assets/2D/rei.jpg';
import powerFace from '/assets/2D/powerFace.jpg';
import sushi from '/assets/2D/sushi.jpg';
import warlock from '/assets/2D/warlock.jpg';
import libra from '/assets/2D/libra.jpg';
import noxcielLogo from '/assets/2D/noxcielLogo.jpg';
import kaleido from '/assets/animation/kaleido.jpg';
import gaiVSthug from '/assets/animation/gaiVSthug.gif';
import runAndJump from '/assets/animation/runAndJump.gif';
import fight from '/assets/animation/fight.gif';
import darkgirl1 from '/assets/2d/darkgirl1.jpg';
import darkgirl2 from '/assets/2d/darkgirl2.gif';

interface Image {
    id: string;
    thumbnail: string;
    fullSize: string;
    title: string;
    description: string;
    category: string;
    type?: 'image' | 'video';
    videoUrl?: string;
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
                        title: 'Blue-Eyes White Dragon w.i.p sculpt',
                        description: 'A work in progress Zbrush sculpt of the Blue-Eyes White Dragon from Yu-Gi-Oh!',
                        category: '3d',
                        relatedImages: [
                            {
                                fullSize: dragon2,
                                description: ''
                            },
                            {
                                fullSize: dragon3,
                                description: ''
                            },
                            {
                                fullSize: dragon4,
                                description: ''
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
                                description: ''
                            },
                            {
                                fullSize: sword3,
                                description: ''
                            },
                            {
                                fullSize: sword4,
                                description: 'UVs'
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
                                description: ''
                            },
                            {
                                fullSize: deadpool3,
                                description: ''
                            },
                        ]
                    },
                    {
                        id: '4',
                        thumbnail: cz1,
                        fullSize: cz1,
                        title: 'CZ 75 SP-01 Shadow',
                        description: 'This is my first fully completed 3D asset, the CZ 75 SP-01 Shadow. I went through the multiple learning curves of modelling, retopology, UV editing, and texturing with this one. Blender was used for everything except for texturing, which was done in Substance Painter. Each movable and removable part is rigged and ready for animation.',
                        category: '3d',
                        relatedImages: [
                            {
                                fullSize: cz2,
                                description: ''
                            },
                        ]
                    },
                    {
                        id: '5',
                        thumbnail: fiend,
                        fullSize: fiend,
                        title: 'Fiend Armor',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '6',
                        thumbnail: phantom1,
                        fullSize: phantom1,
                        title: 'Fiend Armor',
                        description: 'Phantom Armor V1',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: phantom2,
                                description: 'Phantom Armor V2'
                            },
                            {
                                fullSize: phantom3,
                                description: 'Phantom Helmet Variations'
                            },
                            {
                                fullSize: phantom4,
                                description: 'Old Phantom Armor Orthographic'
                            },
                        ]
                    },
                    {
                        id: '7',
                        thumbnail: ghoul1, 
                        fullSize: ghoul1,
                        title: 'Ghoul Armor Front',
                        description: '',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: ghoul2,
                                description: 'Ghoul Armor Back'
                            }
                        ]
                    },
                    {
                        id: '8',
                        thumbnail: ghouldWeapon1,
                        fullSize: ghouldWeapon1,
                        title: 'Ghoul Weapon',
                        description: 'Ghoul Weapon Development 1',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: ghouldWeapon2,
                                description: 'Ghoul Weapon Development 2'
                            }
                        ]
                    },
                    {
                        id: '9',
                        thumbnail: officer1,
                        fullSize: officer1,
                        title: 'Phantom Officer Uniform',
                        description: '',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: officer2,
                                description: 'Phantom Officer Long Coat'
                            },
                            {
                                fullSize: officer3,
                                description: 'Personal Coat over Phantom Officer Uniform'
                            },
                            {
                                fullSize: officer4,
                                description: 'Military Uniform Reference Board 1'
                            },
                            {
                                fullSize: officer5,
                                description: 'Military Uniform Reference Board 2'
                            },
                        ]
                    },
                    {
                        id: '10',
                        thumbnail: magician1,
                        fullSize: magician1,
                        title: 'Dark Magician Girl',
                        description: '',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: magician2,
                                description: ''
                            }
                        ]
                    },
                    {
                        id: '11',
                        thumbnail: room1,
                        fullSize: room1,
                        title: 'Victorian Room Line Art',
                        description: 'Concept art for a Victorian style room.',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: room2,
                                description: 'Wallpaper'
                            },
                            {
                                fullSize: room3,
                                description: 'Carpet'
                            }
                        ]
                    },
                    {
                        id: '12',
                        thumbnail: power,
                        fullSize: power,
                        title: 'Power from Chainsaw Man',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '13',
                        thumbnail: austere,
                        fullSize: austere,
                        title: 'Austere',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '14',
                        thumbnail: lux1,
                        fullSize: lux1,
                        title: 'Lux',
                        description: 'An original character for an original story.',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: lux2,
                                description: 'His boots, both sides.'
                            }
                        ]
                    },
                    {
                        id: '15',
                        thumbnail: killingWord,
                        fullSize: killingWord,
                        title: 'The Killing Word',
                        description: 'This is the concept art of a pistol design that I had been throwing around in my head for years now. It started off as a simple idea of a blocky handgun with brutalist design language, and I had made countless unsuccessful sketches of it in far too many places. Finally, one day I sat down and forced its final form into being, and drew, rendered, and designed the markings for the finalized depiction.',
                        category: '2d'
                    },
                    {
                        id: '16',
                        thumbnail: iddqd1,
                        fullSize: iddqd1,
                        title: 'IDDQD Magazine Work. https://iddqd.pub/',
                        description: 'Second finalized magazine header for IDDQD',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: iddqd2,
                                description: 'Icon 1'
                            },
                            {
                                fullSize: iddqd3,
                                description: 'Icon 2'
                            }
                        ]
                    },
                    {
                        id: '17',
                        thumbnail: header1,
                        fullSize: header1,
                        title: 'Old school TTRPG magazine header',
                        description: 'Initial rough ideation and sketches done for a TTRPG magazine, with the first finalized iteration of the magazine header included at the bottom.',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: header2,
                                description: 'Rough Ideation 2'
                            },
                            {
                                fullSize: header3,
                                description: 'Rough Ideation 3'
                            },
                            {
                                fullSize: header4,
                                description: 'Rough Ideation 4'
                            },
                            {
                                fullSize: header5,
                                description: 'Rough Ideation 5'
                            },
                            {
                                fullSize: header6,
                                description: 'Rough ideation 6, to be developed into the second finalized iteration of the magazine header'
                            },
                            {
                                fullSize: header7,
                                description: 'First completed iteration of the magazine header, inspired by the art and UI of the original DOOM game'
                            },
                        ]
                    },
                    {
                        id: '18',
                        thumbnail: lewa1,
                        fullSize: lewa1,
                        title: 'Lewa and Tanma from Bionicle',
                        description: 'Final Illustration',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: lewa2,
                                description: 'Completed line work'
                            },
                            {
                                fullSize: lewa3,
                                description: 'Initial sketch and pose'
                            }
                        ]
                    },
                    {
                        id: '19',
                        thumbnail: vengeance1,
                        fullSize: vengeance1,
                        title: 'Portrait of Vengeance',
                        description: 'The Titan form of Eren Jaeger from the anime Attack on Titan.',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: vengeance2,
                                description: ''
                            }
                        ]
                    },
                    {
                        id: '20',
                        thumbnail: kamikaze,
                        fullSize: kamikaze,
                        title: 'Kamikaze',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '21',
                        thumbnail: brs1,
                        fullSize: brs1,
                        title: 'BRS',
                        description: '',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: brs2,
                                description: ''
                            },
                            {
                                fullSize: brs3,
                                description: ''
                            },
                            {
                                fullSize: brs4,
                                description: ''
                            }
                        ]
                    },
                    {
                        id: '22',
                        thumbnail: orbit,
                        fullSize: orbit,
                        title: 'Orbit',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '23',
                        thumbnail: muse,
                        fullSize: muse,
                        title: 'Muse',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '24',
                        thumbnail: beach,
                        fullSize: beach,
                        title: 'Beach',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '25',
                        thumbnail: flooded,
                        fullSize: flooded,
                        title: 'Flooded',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '26',
                        thumbnail: lazurite,
                        fullSize: lazurite,
                        title: 'Lazurite',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '27',
                        thumbnail: dtb,
                        fullSize: dtb,
                        title: 'Darker Than Black',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '28',
                        thumbnail: whale,
                        fullSize: whale,
                        title: 'Whale',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '29',
                        thumbnail: magicHands,
                        fullSize: magicHands,
                        title: 'Magic Hands',
                        description: '',
                        category: '2d'
                    },
                    // {
                    //     id: '30',
                    //     thumbnail: rei,
                    //     fullSize: rei,
                    //     title: 'Rei',
                    //     description: '',
                    //     category: '2d'
                    // },
                    // {
                    //     id: '31',
                    //     thumbnail: powerFace,
                    //     fullSize: powerFace,
                    //     title: 'Power',
                    //     description: '',
                    //     category: '2d'
                    // },
                    {
                        id: '32',
                        thumbnail: sushi,
                        fullSize: sushi,
                        title: 'Sushi',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '33',
                        thumbnail: warlock,
                        fullSize: warlock,
                        title: 'Warlock',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '34',
                        thumbnail: libra,
                        fullSize: libra,
                        title: 'Libra',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '35',
                        thumbnail: noxcielLogo,
                        fullSize: noxcielLogo,
                        title: 'Noxciel Logo',
                        description: '',
                        category: '2d'
                    },
                    {
                        id: '36',
                        thumbnail: 'https://img.youtube.com/vi/Rdgsr9QHfd8/maxresdefault.jpg', // YouTube thumbnail
                        fullSize: 'https://img.youtube.com/vi/Rdgsr9QHfd8/maxresdefault.jpg',  // Same thumbnail for consistency
                        title: 'Phase KALEiDO Debut Promotional Video',
                        description: 'I did second key animation (tie down animation) on several of the cuts in this video.',
                        category: 'animation',
                        type: 'video',
                        videoUrl: 'Rdgsr9QHfd8',  // YouTube video ID
                        relatedImages: [
                            {
                                fullSize: kaleido,
                                description: 'I am only allowed to show this one frame of my work unfortunately.'
                            }
                        ]
                    },
                    {
                        id: '37',
                        thumbnail: gaiVSthug,
                        fullSize: gaiVSthug,
                        title: 'Guilty Crown Episode 1 Fight Scene Study',
                        description: 'A study of a segment of a fight scene in the first episode of the anime Guilty Crown.',
                        category: 'animation'
                    },
                    {
                        id: '38',
                        thumbnail: runAndJump,
                        fullSize: runAndJump,
                        title: 'Run and Jump',
                        description: '',
                        category: 'animation'
                    },
                    {
                        id: '39',
                        thumbnail: fight,
                        fullSize: fight,
                        title: 'Fight',
                        description: '',
                        category: 'animation'
                    },
                    {
                        id: '40',
                        thumbnail: darkgirl1,
                        fullSize: darkgirl1,
                        title: 'Dark Aesthetic Girl',
                        description: '',
                        category: '2d',
                        relatedImages: [
                            {
                                fullSize: darkgirl2,
                                description: 'Process gif'
                            }
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