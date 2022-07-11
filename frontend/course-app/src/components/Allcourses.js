import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from './../api/bootapi';
import axios from "axios";
import { toast } from "react-toastify";

function Allcourses() {
    useEffect(()=>{
        document.title = "All Courses || CourseApp";
        
    },[])


    //get courses from the spring boot
    const getallcoursesfromserver = () =>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                // if success print response
                console.log(response.data)
                toast.success("course has been loaded",{
                    position:"bottom-center"
                })
                setCourses(response.data)
            },(error)=>{
                //if fail print error
                console.log(error)
                toast.error("something went wrong!",{
                    position:"bottom-center"
                })

            }
        )
    }

    //load getallcoursesfromserver
    useEffect(()=>{
        getallcoursesfromserver();
    },[])

    const [courses, setCourses] = useState([])

    //remove course from courses
    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id))
    }

    
    return (
        <div>
            <h1>All courses</h1>
            <p> List of courses are follow:</p>
                {courses.length > 0 
                    ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourse}/>)
                    : "no courses"
                }
        </div>
    )
}

export default Allcourses;