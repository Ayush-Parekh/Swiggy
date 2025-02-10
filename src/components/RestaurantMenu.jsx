import React, { useEffect } from 'react'
import { useState } from 'react';
import { data, useParams , Link} from 'react-router-dom'

function RestaurantMenu() {
    const [menuData,setMenuData]=useState([])
    const [resData,setresData]=useState([])
    const [distData,setdistData]=useState([])
    const [value,setValue]=useState(0);
    function handlePrev(){
        value<=0?"":setValue((prev)=>prev-41)
    }
    function handleNext(){
        value>=123?"":setValue((prev)=>prev+41)
    }
    const {id}=useParams();
    // console.log(resData);
    
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
                <h1 className='text-2xl pt-8 font-bold pl-2'>{resData.name}</h1>
                <div className='w-full h-[180px] bg-gradient-to-t from-gray-300/70 mt-3 px-4 pb-4 rounded-[30px]'>
                    <div className='w-full rounded-[20px] border border-gray-300/70 h-full bg-white'>
                        <div className='w-full h-full p-4'>
                                
                            <div className='flex items-center gap-1 font-bold'>
                                <i className="fi fi-ss-circle-star mt-1 text-green-700 text-lg"></i>
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
                        <div className='w-full overflow-hidden'>

                            <div className='flex justify-between mt-5 pt-4'>
                                <h1 className='font-bold text-xl'>Deals for you</h1>
                                
                                <div
                                 className='flex gap-2'>
                                    <div onClick={handlePrev} className={`cursor-pointer rounded-full w-9 h-9 flex justify-center ` +(value<=0?" bg-gray-100": "bg-gray-300")}>
                                        <i className={`fi text-2xl mt-1      fi-rr-arrow-small-left ` + (value<=0?"text-gray-300":"text-gray-800")}></i>
                                    </div>
                                    <div onClick={handleNext}className={`cursor-pointer rounded-full w-9 h-9 flex justify-center ` +(value>=123?" bg-gray-100 ": " bg-gray-300 ")}>
                                        <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value>=120 ? " text-gray-300":" text-gray-800")}></i>
                                    </div>
                                </div>

                            </div>
                            <div
                            style={{translate:`-${value}%`}} 
                            className='flex gap-4 mt-3 duration-500'>

                            {
                                distData.map((data,index)=>(
                                    
                                    <Discount key={index} data={data}/>
                                    
                                ))
                                
                            }
                            </div>
                        </div>
                        
                        <h2 className='text-center mt-10'>Menu </h2>
                        <div className='w-full mt-5'>
                            <div className='w-full text-center p-3 rounded-xl font-bold text-gray-800/50 bg-gray-100'>Search For Dishes</div>
                        </div>
    
                    </div>
                </div>
            </div>
           
           
        </div>
    )
}

function Discount({data:{info:{header,couponCode,offerLogo}}}) {
    // console.log();
    
    return (
        <div className='flex min-w-[328px] border border-gray-300 gap-3 rounded-2xl h-[76px] p-3'>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" + offerLogo} alt="" />
            <div>
                <h2 className='font-extrabold'>{header}</h2>
                <p className='text-gray-400 text-sm font-bold'>{couponCode}</p>
            </div>
        </div>
    )
}

export default RestaurantMenu
