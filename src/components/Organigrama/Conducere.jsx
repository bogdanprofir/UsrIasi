import React from 'react';
import OrganizationMember from './OrganizationMember';

const OrganizationStructure = () => {
    const judeteanaMembers = [
        { name: "Stefan Tanasa", title: "Presedinte", imageUrl: "/StefanTanasa.jpeg" },
        // Add more members as needed
    ];

    const municipalaMembers = [
        { name: "Filip Havarneanu", title: "Presedinte", imageUrl: "/FilipHavarneanu.jpeg" },
        { name: "Dragos Popa", title: "Vicepresedinte", imageUrl: "/DragosPopa.jpeg" },
        { name: "Daniela Disca", title: "Vicepresedinte", imageUrl: "/DanielDisca.jpeg" },
        { name: "Marius Ciobanu", title: "Vicepresedinte", imageUrl: "/MariusCiobanu.jpeg" },
        { name: "Razvan Timofciuc", title: "Vicepresedinte", imageUrl: "/RazvanTimofciuc.jpeg" },
        // Add more members as needed
    ];

    const bjMembrii = [
        "Filip Havarneanu",
        "",
        // Add more names as needed
    ];

    const bLocal = [
        "Andrei Popescu",
        
        "Tudor Florea",
        "Catalin Caba",
        "Liviu Rusu",
        "Alexandru Corneanu",
        "Stefan Lontcovschi",
        // Add more names as needed
    ];
    return (
        <div className="p-4 space-y-6 pt-20 min-h-screen">
            <div>
                <h2 className="text-2xl text-[#002A59] font-bold">ORGANIZATIA JUDETEANA</h2>
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
                <div className="w-full md:w-[50%] bg-white opacity-75 mt-6">
                    <h3 className="text-2xl text-center text-[#002A59] font-semibold">Membrii Biroului Judetean</h3>
                    <table className="min-w-full text-[#002A59] font-bold mt-2">
                        <tbody>
                            {bjMembrii.map((name, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2 className="text-2xl text-[#002A59] font-bold">ORGANIZATIA MUNICIPALA</h2>
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
                <div className="w-full md:w-[50%] bg-white opacity-75 mt-6">
                    <h3 className="text-2xl text-center text-[#002A59] font-semibold">Membrii Biroului Local</h3>
                    <table className="min-w-full text-[#002A59] font-bold mt-2">
                        <tbody>
                            {bLocal.map((name, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrganizationStructure;