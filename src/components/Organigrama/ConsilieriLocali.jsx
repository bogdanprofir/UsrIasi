import React from 'react'
import OrganizationMember from './OrganizationMember'
import { Helmet } from 'react-helmet'

const ConsilieriLocali = () => {

    const Consilieri = [
        
        { name: "Ionuț Anastasiei", title: "Consilier Local Iași", imageUrl: "/BJ.png" },
        { name: "Laura Chiticariu", title: "Consilier Local Iași", imageUrl: "/BJ.png" },        
        { name: "Diana Finkelștain", title: "Consilier Local Iași", imageUrl: "/BJ.png" },
        { name: "Emanuel Zanovschi", title: "Consilier Local Iași", imageUrl: "/BJ.png" },
        { name: "Andrei Popescu", title: "Consilier Local Iași", imageUrl: "/AndreiPopescu.png" },
        { name: "Popescu Mădălina", title: "Consilier Local Iași", imageUrl: "/BJ.png" },
        { name: "Gabriela Cojocaru", title: "Consilier Local Iași", imageUrl: "/BJ.png" },
        { name: "Iulian Nicolau", title: "Consilier Local Iași", imageUrl: "/Bj.png" },
       
    ]   
    
  return (
    <div className='p-4 space-y-6 pt-20 min-h-screen'>
        <Helmet>
        <title>Consilieri Locali USR Iași</title>
      </Helmet>
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