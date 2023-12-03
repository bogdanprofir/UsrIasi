// ImageGallery.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import G1 from '../assets/Gallery1.jpeg'
import G2 from '../assets/Gallery2.jpeg'
import G3 from '../assets/Gallery3.jpeg'
import G4 from '../assets/Gallery4.jpeg'
import G5 from '../assets/Gallery5.jpeg'
import G6 from '../assets/Gallery6.jpeg'
import G7 from '../assets/Gallery7.jpeg'
import G8 from '../assets/Gallery8.jpeg'
import G9 from '../assets/Gallery9.jpg'
import G10 from '../assets/Gallery10.jpg'
import G11 from '../assets/Gallery11.jpg'
import G12 from '../assets/Gallery12.jpg'
import G13 from '../assets/Gallery13.jpg'
import G14 from '../assets/Gallery14.jpeg'
import G15 from '../assets/Gallery15.jpeg'
import G16 from '../assets/Gallery16.jpeg'
import G17 from '../assets/Gallery17.jpeg'
import G18 from '../assets/Gallery18.jpg'
import G19 from '../assets/Gallery19.jpeg'
import G20 from '../assets/Gallery20.jpeg'
import G21 from '../assets/Gallery21.jpeg'
import G22 from '../assets/Gallery22.jpeg'
import G23 from '../assets/Gallery23.jpeg'
import G24  from '../assets/Gallery24.jpeg'
import G25 from '../assets/Gallery25.jpeg'

// ... import other images

const imageData = [
     { src: G1 },
     { src: G3 },
     { src: G4 },
     { src: G19},
     { src: G5 },
     { src: G6 },
     { src: G7 },
     { src: G20},
     { src: G10},
     { src: G11},
     { src: G18},
     { src: G24},
     { src: G23},
     { src: G8},
     { src: G9},
     { src: G2},
     { src: G15},
     { src: G25},
     { src: G12},
     { src: G13},
     { src: G14},    
     { src: G21},
     { src: G22},
     { src: G16},
     { src: G17},
   
    
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    useEffect(() => {
        
        window.addEventListener('keydown', handleKeyDown);

        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); 

    return (
        <div className="flex flex-wrap min-h-screen p-[10vh]">
        <Helmet>
            <title>Galerie foto | USR Iasi</title>
        </Helmet>
        {imageData.map((img, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-4">
                <img
                    className="cursor-pointer w-full h-[200px] object-cover rounded-lg shadow-lg"
                    src={img.src}
                    alt={`Gallery img ${index}`}
                    onClick={() => setSelectedImage(img)}
                />
            </div>
        ))}

        {/* Lightbox overlay */}
        {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
                        <div className=" p-4 rounded-lg max-w-screen-md w-full">
                            <span
                                className="absolute top-30 right-80 text-white cursor-pointer text-xl"
                                onClick={handleClose}
                            >
                                X
                            </span>
                            <img
                                className="w-full h-auto max-h-[100vh] max-w-full rounded-lg"
                                src={selectedImage.src}
                                alt="Selected"
                                onClick={handleClose}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;