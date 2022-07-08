import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from './../api/bootapi';
import axios from "axios";

function Allcourses() {
    useEffect(()=>{
        document.title = "All Courses || CourseApp";
    },[])


    //get courses from the spring boot
    const getallcoursesfromserver = () =>{
        axios.get(`${base_url}\courses`).then(
            (Response)=>{
                // if success print response
                console.log(Response)
            },(Error)=>{
                //if fail print error
                console.log(Error)
            }
        )
    }

    const [courses, setCourse] = useState([
        { title: 'Java Course', description: 'this is demo test' },
        { title: 'Python Course', description: 'this is demo test' },
        { title: 'nodejs Course', description: 'this is demo test' }
    ])
    return (
        <div>
            <h1>All courses</h1>
            <p> List of courses are follow:</p>
                {courses.length > 0 
                    ? courses.map((item)=> <Course course={item}/>)
                    : "no courses"
                }
        </div>
    )
}

export default Allcourses;