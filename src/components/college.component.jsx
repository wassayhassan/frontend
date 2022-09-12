import React from "react";
import {useState, useEffect} from 'react';
import { Button, Spinner } from "flowbite-react";
function College({college}){

   const [wishLoading, setWishLoding] = useState(false);

    return(
        <div className="bg-gray-50 rounded-md flex flex-crow sm:w-2/3 md:w-2/3 lg:w-2/3 2xl:w-2/3 m-2 p-2">
            <div className="left-container flex flex-col w-2/3">
                <div className="heading-container">
                <p className="text-left font-bold text-lg">{college.College}</p>
                </div>
                <div className="mid-container">
                 <p className="text-left text-sm">{college.brn}</p>
                 <div className="flex flex-row justify-between">
                    <p className="text-left">
                        <span className="font-bold">Rank </span>
                        {college.Rank}
                    </p>
                    <p>{college.District}</p>
                 </div>
                
                </div>
                <div className="bottom-container">
                  
                  <p className="text-left">{college.Location}</p>
                </div>
            </div>
            <div className="right-container flex flex-col justify-end ml-5 mb-3">
            <Button>
                <div className="mr-3">
               {wishLoading && <Spinner
                    size="sm"
                    light={true}
                />
               }
                </div>
                Add to WishList
            </Button>
            </div>

        </div>
    )
}
export default College;