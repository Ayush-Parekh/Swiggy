import React, { useEffect } from 'react'
import { useState } from 'react';
import { data, useParams , Link} from 'react-router-dom'

function RestaurantMenu() {
    const [menuData,setMenuData]=useState([])
    const [resData,setresData]=useState([])
    const [distData,setdistData]=useState([])
    const {id}=useParams();
    console.log(resData);
    
    const mainId=id.split("-").at(-1).slice(4);
    async function fetchMenu() {
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`)
        let res = await data.json();
        // console.log(resInfo);
        setMenuData(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
        setresData(res?.data?.cards[2]?.card?.card?.info)
        setdistData(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
        
    }
    useEffect(()=>{
        fetchMenu();
    },[])
    
    return (
        <div className='w-full'>
            <div className='w-[800px] mx-auto pt-6 '>
                <p className='text-[9px] text-slate-500'>
                    <Link to={"/"}><span className='hover:cursor-pointer hover:text-slate-800'>Home</span>
                    </Link>
                     / 
                    <span className='hover:cursor-pointer hover:text-slate-800'>{resData?.city}</span>
                     / 
                    <span className='text-slate-800'>{resData?.name}</span>
                </p>
                <h1 className='text-2xl pt-8 font-bold'>{resData.name}</h1>
                <div className='w-full h-[206px] bg-gradient-to-t from-gray-300/70 mt-3 px-4 pb-4 rounded-[30px]'>
                    <div className='w-full rounded-[20px] border border-gray-300/70 h-full bg-white p-4'>
                        <div className='flex items-center gap-1 font-bold'>
                            <i class="fi fi-ss-circle-star mt-1 text-green-700 text-lg"></i>
                            <span>{resData?.avgRating}</span>
                            <span>({resData?.totalRatingsString})</span>
                            <span>.</span>
                            <span>{resData?.costForTwoMessage}</span>
                        </div>
                        <p className='font-bold text-red-600 underline'>{resData?.cuisines?.join(", ")}</p>
                        <div className='flex mt-3 gap-3'>
                            <div className='flex justify-center mt-2 flex-col items-center w-[4px]'>
                                <div className='w-1.5 h-1.5 bg-gray-300 rounded-full'> </div>
                                <div className='w-[0.5px] h-[30px] bg-gray-300'> </div>
                                <div className='w-1.5 h-1.5 bg-gray-300 rounded-full'></div>
                            </div>
                            <div className='gap-2 flex flex-col text-sm'>
                                <p className='font-bold'>Outlet  <span className='text-gray-400 font-medium'>{resData?.locality}</span></p>
                                <p className='font-bold text-sm'>{resData?.sla?.slaString}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu
