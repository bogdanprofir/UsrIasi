// ImageGallery.js
import React, { useState } from 'react';
import BRK1 from '../assets/break.jpg';

// ... import other images

const imageData = [
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    { src: BRK1, description: 'B.R.E.A.K.' },
    
    //... add more images with descriptions
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="flex flex-wrap min-h-screen p-4">
            {imageData.map((img, index) => (
                <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <img 
                        className="cursor-pointer w-full rounded-lg shadow-lg"
                        src={img.src} 
                        alt={`Gallery img ${index}`} 
                        onClick={() => setSelectedImage(img)}
                    />
                    <p className="mt-2 w-full bg-[#002A59] text-white text-center">{img.description}</p>
                </div>
            ))}

            {/* Lightbox overlay */}
            {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <img 
                        className="max-h-[80%] max-w-[90%] rounded-lg" 
                        src={selectedImage.src} 
                        alt="Selected" 
                        onClick={() => setSelectedImage(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default ImageGallery;
