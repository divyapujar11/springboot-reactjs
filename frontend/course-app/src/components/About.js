import React, { useEffect } from "react";

function About(){
    useEffect(()=>{
        document.title="About || CourseApp";
    },[])
    return(
        <div className="text-center">
        <h1>About Page under construction</h1>
        <h2> ^-^ </h2>
        </div>
    )
}

export default About;