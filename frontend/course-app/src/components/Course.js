import React from "react";
import {Card, CardBody, CardSubtitle, CardTitle, CardText, CardFooter, Button, Container } from 'reactstrap';
import axios from "axios";
import {toast} from "react-toastify"
import base_url from "../api/bootapi";

function Course({course, update}){

    const deleteCourse=(id)=>{
      axios.delete(`${base_url}/courses/${id}`).then(
        (response)=>{
          toast.success("course deleted!")
          update(id)
        },
        (error)=>{
          toast.error("~ _ ~ course not deleted!")
        }
      )
    }

    return(
    <Card>
      <CardBody className="text-center">
        <CardSubtitle tag="h5">
          {course.title}
        </CardSubtitle>
        <CardText>
          {course.description}
        </CardText>
      <div >
        <Button color="danger" onClick={()=>{deleteCourse(course.id)}}>
          Delete
        </Button>
        <Button color="warning" style={{margin:3}}>
          Update
        </Button>
        
      </div>  
        
      </CardBody>
    </Card>
    )
}

export default Course;