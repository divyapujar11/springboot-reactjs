import React from "react";
import {Card, CardBody, CardSubtitle, CardTitle, CardText, CardFooter, Button, Container } from 'reactstrap';

function Course({course}){
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
        <Button color="danger ml-3">
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