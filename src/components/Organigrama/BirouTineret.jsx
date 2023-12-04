import React from 'react'
import OrganizationMember from './OrganizationMember';
import { Helmet } from 'react-helmet'


const BirouTineret = () => {

    const municipalaMembers = [
        { name: "Ștefan Lontcovschi", title: "Președinte", imageUrl: "/StefanLontcovschiT.png" },
        { name: "Tudor Bizim", title: "Vicepreședinte", imageUrl: "/TudorBizim.png" },
        { name: "Dragoș George Cernătescu ", title: "Vicepreședinte", imageUrl: "/Tineret.png" },
        { name: "Alexandru Florea ", title: "Vicepreședinte", imageUrl: "/AlexandruFlorea.png" },
        { name: "Andrei Sălceanu  ", title: "Vicepreședinte", imageUrl: "/Tineret.png" },
        { name: "Iustin Blaga ", title: "Vicepreședinte", imageUrl: "/Tineret.png" },
        { name: "Crina Lavinia Iurașcu  ", title: "Vicepreședinte", imageUrl: "/LaviniaIurascu.png" },
        { name: "Bogdan Marian Puiu ", title: "Vicepreședinte", imageUrl: "/BogdanPuiu.png" },
        { name: "Armand Pălăncianu ", title: "Vicepreședinte", imageUrl: "/ArmandPalancianu.png" },
        { name: "Eliza Elena Matei  ", title: "Vicepreședinte", imageUrl: "/MateiEliza.png" },
        { name: " Maria Magdalena Isache  ", title: "Vicepreședinte", imageUrl: "/MariaIsache.png" },
       
        // Add more members as needed
    ];

    

  return (
    <div className="p-4 space-y-6 pt-20 min-h-screen">
         <Helmet>
            <title>Biroul de Tineret USR Iași</title>
        </Helmet>
        


<div>
                <h2 className="text-2xl text-[#002A59] font-bold">Biroul de Tineret USR Iași</h2>
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

export default BirouTineret