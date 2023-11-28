import React from 'react'
import OrganizationMember from './OrganizationMember'

const ConsilieriJudeteni = () => {

    const Consilieri = [
        
        { name: "Bogdan Mihail", title: "Consilier Judetean", imageUrl: "/Tineret.png" },
        
        { name: "Ciobanu Marius Mihai", title: "Consilier Judetean", imageUrl: "/Tineret.png" },
        { name: "Codrin Dănilă", title: "Consilier Judetean", imageUrl: "/Tineret.png" },
        { name: " Ignat Etienne", title: "Consilier Judetean", imageUrl: "/Tineret.png" },
        { name: " Socolov Răzvan - Vladimir", title: "Consilier Judetean", imageUrl: "/Tineret.png" },
    ]   
    
    
  return (
    <div className='p-4 space-y-6 pt-20 min-h-screen'>
        <div>
            <h2 className='text-2xl text-[#002A59] font-bold '>Consilieri Judeteni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {Consilieri.map((member) => (
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

export default ConsilieriJudeteni