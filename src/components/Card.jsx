import React from 'react'
import { Link } from 'react-router-dom'

function Card(info) {
    // console.log(info.);
    
return (
    <Link to={`/restaurantmenu/${info.link.split("/")[5]}`}>
        <div className='min-w-[270px] h-[183px] relative'>

            <img
           
            className='w-full h-full aspect-video rounded-2xl object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+info.cloudinaryImageId} alt="" />
                <div className='bg-gradient-to-t from-black from-1% to-transparent to-40% rounded-2xl w-full h-full absolute top-0'>
                    <p className='absolute ml-3 mb-1.5 bottom-0 text-white font-bold text-2xl'>
                        {
                            info?.aggregatedDiscountInfoV3 ? info?.aggregatedDiscountInfoV3?.header +" " + info?.aggregatedDiscountInfoV3?.subHeader :" "
                        }
                    </p>                    

                </div>
        </div>
        <div className='mt-2 ml-3'>
            <h2 className='text-lg text-gray-700 font-bold line-clamp-1'>{info.name}</h2>
            <p className='flex items-center gap-1 text-base text-gray-700 font-bold'>
                <i className="fi fi-ss-circle-star mt-1 text-green-700 text-lg"></i> {info?.avgRating}
                <span className='font-bold text-lg'>.</span>
                <span className='font-bold'>{info?.sla?.slaString}</span>
            </p>
            <p className='line-clamp-1 font-medium text-black/60'>{info?.cuisines.join(", ")}</p>
            <p className='line-clamp-1 font-medium text-black/60'>{info?.locality}</p>
        </div>
    </Link>
    );
    
}

export default Card;