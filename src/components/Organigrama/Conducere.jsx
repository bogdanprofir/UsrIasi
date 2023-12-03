import React from 'react';
import OrganizationMember from './OrganizationMember';
import { Helmet } from 'react-helmet'

const OrganizationStructure = () => {
    const judeteanaMembers = [
        { name: "Ștefan Tănasă", title: "Președinte", imageUrl: "/StefanTanasa.png" },
        { name: "Iulian Florin Bucșă", title: "Vicepreședinte", imageUrl: "/BJ.png" },
        { name: "Iulian Mititelu", title: "Vicepreședinte", imageUrl: "/BJ.png" },
        { name: "Costel Parfene", title: "Vicepreședinte", imageUrl: "/BJ.png" },
        { name: "Laurențiu-Andrei Porcărașu", title: "Vicepreședinte", imageUrl: "/BJ.png" },
        { name: "Mihail Bogdan ", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Danilă Codrin", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Dumitru Eduard Todi", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Adrian Ionuț Gociu", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Andrei Chirica", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Elena Chirilă", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Gheorghe Marian Ghițonic", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Cristian Antici", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Madalin Costinel Tănase", title: "Membru", imageUrl: "/BJ.png" },
        { name: "Silviu-Ionuț Ghenghea", title: "Membru", imageUrl: "/BJ.png" },
        // Add more members as needed
    ];

    

   
    return (
        <div className="p-4 space-y-6 pt-20 min-h-screen">
             <Helmet>
            <title>Biroul Județean USR Iași</title>
        </Helmet>
            <div>
                <h2 className="text-2xl text-[#002A59] font-bold">Biroul Județean USR Iași</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {judeteanaMembers.map((member) => (
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