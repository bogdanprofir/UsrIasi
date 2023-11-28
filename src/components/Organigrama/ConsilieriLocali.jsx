import React from 'react'
import OrganizationMember from './OrganizationMember'

const ConsilieriLocali = () => {

    const Consilieri = [
        
        { name: "ANASTASIEI IONUȚ - DANIEL", title: "Consilier Local", imageUrl: "/Tineret.png" },
        { name: "Daniel Disca", title: "Consilier Local", imageUrl: "/DanielDisca.png" },        
        { name: "Madalina Petrea Popescu", title: "Consilier Local", imageUrl: "/Tineret.png" },
        { name: "Finkelstain Diana", title: "Consilier Local", imageUrl: "/Tineret.png" },
        { name: " Nicolau Iulian", title: "Consilier Local", imageUrl: "/Tineret.png" },
        { name: " Carcea Maria Ileana", title: "Consilier Local", imageUrl: "/Tineret.png" },
        { name: " Carcea Maria Ileana", title: "Consilier Local", imageUrl: "/Tineret.png" },
        { name: " Emanuel Zanoschi", title: "Consilier Local", imageUrl: "/Tineret.png" },
        { name: " Gabriela Cojocaru", title: "Consilier Local", imageUrl: "/Tineret.png" },
        { name: " Popescu Andrei- Vasile", title: "Consilier Local", imageUrl: "/Tineret.png" },
    ]   
    
  return (
    <div className='p-4 space-y-6 pt-20 min-h-screen'>
        <div>
            <h2 className='text-2xl text-[#002A59] font-bold '>Consilieri Locali</h2>
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

export default ConsilieriLocali