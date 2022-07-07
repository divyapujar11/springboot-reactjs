import React from "react";
import {Card, CardBody, CardSubtitle, CardTitle, CardText, CardFooter, Button, Container } from 'reactstrap';

function Course(){
    return(
        <div>
  <Card outline>
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a java course for beginners
      </CardText>
      <Button>
        Delete
      </Button>
      <Button>Update</Button>
    </CardBody>
  </Card>
</div>
    )
}

export default Course;