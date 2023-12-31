import React from 'react'
import OrganizationMember from './OrganizationMember';
import { Helmet } from 'react-helmet'

const BiroulLocal = () => {

    const municipalaMembers = [
        { name: "Filip Havârneanu", title: "Președinte", imageUrl: "/FilipHavarneanu.jpeg" },
        { name: "Dragoș Popa", title: "Vicepreședinte", imageUrl: "/DragosPopa.jpeg" },
        { name: "Daniel Disca", title: "Vicepreședinte", imageUrl: "/DanielDisca.png" },
        { name: "Marius Ciobanu", title: "Vicepreședinte", imageUrl: "/MariusCiobanu.png" },
        
        { name: "Andrei Popescu", title: "Vicepreședinte", imageUrl: "/AndreiPopescu.png" },
        { name: "Ștefan Lontcovschi", title: "Membru", imageUrl: "/StefanLontcovschi.png" },
        { name: "Alex Corneanu", title: "Membru", imageUrl: "/RazvanTimofciuc.png" },
        { name: "Tudor Florea", title: "Membru", imageUrl: "/TudorFlorea.png" },
        { name: "Catalin Caba", title: "Membru", imageUrl: "/CatalinCaba.jpeg" },
        { name: "Liviu Rusu", title: "Membru", imageUrl: "/RazvanTimofciuc.png" },
        // Add more members as needed
    ];

  return (
    <div className="p-4 space-y-6 pt-20 min-h-screen">
        <Helmet>
            <title>Biroul Local USR Iași</title>
        </Helmet>

<div>
                <h2 className="text-2xl text-[#002A59] font-bold">Biroul Local USR Iași</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {municipalaMembers.map((member) => (
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
  )
}

export default BiroulLocal