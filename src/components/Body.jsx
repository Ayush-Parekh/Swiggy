import React, { useEffect, useState } from 'react'
import Onyourmind from './Onyourmind'
import TopRestaurant from './TopRestaurant'
import Onlinefood from './Onlinefood'
function Body() {
    const [td,settd]=useState([])
    const [od,setod]=useState([])

    async function  fetchData() {
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const result=await data.json();
        settd(result?.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setod(result?.data.cards[0]?.card?.card?.imageGridCards?.info)
    }
        useEffect(()=>{
            fetchData()
        },[])
    
    return (
        
        <div className='w-full '>
            
            <div className='w-[75%] mx-auto mt-3 overflow-hidden'>
               <Onyourmind data={od} />
               <TopRestaurant data={td} />
               <Onlinefood data={td}/>
              
            </div>
        </div>
    )
}

export default Body
