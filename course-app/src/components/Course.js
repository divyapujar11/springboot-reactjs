import React from "react";
import {Card, CardBody, CardSubtitle, CardTitle, CardText, CardFooter, Button, Container } from 'reactstrap';

function Course({course}){
    return(
    <Card>
      <CardBody>
        <CardSubtitle tag="h5">
          {course}
        </CardSubtitle>
        <CardText>
          {course.description}
        </CardText>
        
        <Button color="danger">
          Delete
        </Button>
        <Button color="warning ml-3">
          Update
        </Button>
        
      </CardBody>
    </Card>
    )
}

export default Course;