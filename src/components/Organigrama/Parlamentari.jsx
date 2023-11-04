import React from 'react';
import OrganizationMember from './OrganizationMember';

const OrganizationStructure = () => {
    const senatoriMembers = [
        { name: "Marius Bodea", title: "Senator", imageUrl: "/StefanTanasa.jpeg" },
        { name: "Cristi Berea", title: "Senator", imageUrl: "/StefanTanasa.jpeg" },
        
        ];
    

    const deputatiMembers = [
        { name: "Monica Berescu", title: "Deputat", imageUrl: "/FilipHavarneanu.jpeg" },
        { name: "Filip Havarneanu", title: "Deputat", imageUrl: "/FilipHavarneanu.jpeg" },
    ];
   
    return (
        <div className="p-4 space-y-6 pt-20 min-h-screen">
            <div>
                <h2 className="text-2xl text-[#002A59] font-bold"> SENATORI</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {senatoriMembers.map((member) => (
                        <OrganizationMember 
                            key={member.name}
                            imageUrl={member.imageUrl}
                            name={member.name}
                            title={member.title}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl text-[#002A59] font-bold">DEPUTATI</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {deputatiMembers.map((member) => (
                        <OrganizationMember 
                            key={member.name}
                            imageUrl={member.imageUrl}
                            name={member.name}
                            title={member.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrganizationStructure;
