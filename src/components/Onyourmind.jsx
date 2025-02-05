import React, { useEffect, useState } from 'react'

function Onyourmind({data}) {
    const [value,setValue]=useState(0);
    function handlePrev(){
        value<=0?"":setValue((prev)=>prev-28)
    }
    function handleNext(){
        value>=112?"":setValue((prev)=>prev+28)
    }
    return (
        <div>
        <div className='flex justify-between mt-5'>
            <h1 className='font-bold text-2xl'>What's on your mind?</h1>
        
            <div className='flex gap-2'>
                <div onClick={handlePrev} className={`cursor-pointer rounded-full w-9 h-9 flex justify-center ` +(value<=0?" bg-gray-100": "bg-gray-300")}>
                    <i className={`fi text-2xl mt-1      fi-rr-arrow-small-left ` + (value<=0?"text-gray-300":"text-gray-800")}></i>
                </div>
                <div onClick={handleNext}className={`cursor-pointer rounded-full w-9 h-9 flex justify-center ` +(value>=112?" bg-gray-100 ": " bg-gray-300 ")}>
                    <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value>=112 ? " text-gray-300":" text-gray-800")}></i>
                </div>
            </div>
        </div>
        <div 
        style={{translate:`-${value}%`}}
        className={`flex mt-4 duration-500`}  >
            {
                data.map((item,index)=>(
                    <img 
                    key={index}
                    className='w-32 ' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt="" />
                ))
            }
        </div>
        <hr className='mt-10' />
        </div>
    )
}

export default Onyourmind
