import React from "react";
import College from "./college.component";

function CollegeList({colleges}){
    return (
        <>
        {colleges.map((college)=> {
            return <College key={college._id} college={college} />
        })}
        </>

    )
}
export default CollegeList