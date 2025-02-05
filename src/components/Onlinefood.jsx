import React from 'react'
import Card from './Card'
function Onlinefood({data}) {
    return (
        <div>
            Online Food deilvery in Surat
            <div className='grid grid-cols-4 gap-5'>
                        
            {
                data.map(({info,cta : {link}} ,index)=>(
                <div 
                key={index}
                className='hover:scale-91 duration-300'>
                    <Card {...info} link={link}/>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default Onlinefood