import React, { useEffect, useState } from 'react'
import Card from './Card'
function TopRestaurant({data}) {
    console.log(data);
    
    const[value,setValue]=useState(0)
    function handleNext(){
        value>=100?"":setValue((prev)=>prev+25)
    }
    function handlePrev(){
        value<=0?"":setValue((prev)=>prev-25)
    }
    return (
        <div className='mt-10 w-full'>
        <div className='flex justify-between mt-5'>
            <h1 className='font-bold text-2xl'>Top restaurant chains in Chhindwara</h1>
        
            <div className='flex gap-2'>
                <div onClick={handlePrev} className={`cursor-pointer rounded-full w-9 h-9 flex justify-center ` +(value<=0?" bg-gray-100": "bg-gray-300")}>
                    <i className={`fi text-2xl mt-1      fi-rr-arrow-small-left ` + (value<=0?"text-gray-300":"text-gray-800")}></i>
                </div>
                <div onClick={handleNext}className={`cursor-pointer rounded-full w-9 h-9 flex justify-center ` +(value>=100?" bg-gray-100 ": " bg-gray-300 ")}>
                    <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value>=100 ? " text-gray-300":" text-gray-800")}></i>
                </div>
            </div>
        </div>
        <div className={`flex mt-4  gap-5 w-full duration-500`}
        style={{translate:`-${value}%`}}
        >
            {
                data.map(({info,cta : {link}})=>(
                <div 
                key={"info?.externalRatings?.id"}
                className='hover:scale-91 duration-300'>
                    <Card {...info} link={link}/>
                </div>
                ))
            }
        </div>
        <hr className='mt-10' />
        </div>
    )
}

export default TopRestaurant
