import React from 'react'
import "tailwindcss"
import { Outlet , Link } from 'react-router-dom'

function Navbar() {
    const navItems=[
        {
            name:"Swiggy Corporate",
            image:"fi-rr-shopping-bag"
        },
        {
            name:"Search",
            image:"fi-bs-search"
        },
        {
            name:"offers",
            image:"fi-br-badge-percent"
        },
        {
            name:"Help",
            image:"fi-sr-interrogation"
        },
        {
            name:"Sign In",
            image:"fi-br-sign-in-alt"
        },
        {
            name:"cart",
            image:"fi-sr-shopping-cart"
        },
    ]
    return (
        <>
        <div className='w-full shadow-sm h-20 flex justify-center items-center' >
            <div className=' w-[70%] flex justify-between'>
                <div className='flex items-center  gap-10'>
                    <Link to={"/"}>
                    <img className='w-24' src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" alt="" />
                    </Link>
                    <div className='flex items-center gap-2'>
                        <p className='font-bold border-b-2 border-black'>other</p>
                        <i className="fi text-2xl mt-2 text-orange-500 fi-rr-angle-small-down"></i>
                    </div>
                        
                </div>

                <div className='flex items-center gap-10'>
                    {
                        navItems.map((data,i)=>(
                            
                            <div className='flex items-center gap-2' key={i}>
                                <i className={`fi ${data.image} mt-1`}></i>
                                <p className='text-gray-600 font-medium text-sm '>{data.name}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
        <Outlet/>
    </>
    )
}

export default Navbar
