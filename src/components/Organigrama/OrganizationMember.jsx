// OrganizationMember.jsx
import React from 'react';
import './OrganizationMember.css'; // Import your CSS file

const OrganizationMember = ({ imageUrl, name, title }) => {
    return (
        <div className="rounded flex flex-col items-center overflow-hidden shadow-lg">
            <div className="image-container">
                <div className="circle-mask">
                    <img className="rounded-full" src={imageUrl} alt={name} />
                </div>
            </div>
            <div className="px-6 bg-[#002A59] w-full flex flex-col text-white justify-center items-center py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-base">{title}</p>
            </div>
        </div>
    );
};

export default OrganizationMember;
