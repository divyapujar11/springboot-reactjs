import React, { useState } from "react";
import Course from "./Course";

function Allcourses() {
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