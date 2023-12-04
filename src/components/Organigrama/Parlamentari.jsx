import React from 'react';
import OrganizationMember from './OrganizationMember';
import { Helmet } from 'react-helmet'

const OrganizationStructure = () => {
    const senatoriMembers = [
        { name: "Monica Berescu", title: "Deputat", imageUrl: "/MonicaBerescu.png" },
        { name: "Marius Bodea", title: "Senator", imageUrl: "/MariusBodea.png" },
        { name: "Filip Havârneanu", title: "Deputat", imageUrl: "/FilipHavarneanuP.png" },
        { name: "Cristi Berea", title: "Senator", imageUrl: "/CristiBerea.png" },
        ];
    

    
   
    return (
        <div className="p-4 space-y-6 pt-20 min-h-screen">
            <Helmet>
        <title>Parlamentari USR Iași</title>
      </Helmet>
            <div>
                <h2 className="text-2xl text-[#002A59] font-bold"> Parlamentari USR Iasi</h2>
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

            
        </div>
    );
};

export default OrganizationStructure;
