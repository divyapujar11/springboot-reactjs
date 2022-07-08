import React, { Fragment } from "react";
import {Form,FormGroup,Label,Input, Container, Button} from 'reactstrap';

function AddCourse(){
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill the Course Details</h1>
            <Form>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId"></Input>
                </FormGroup>
                <FormGroup>
                    <label for='title'>Course Title</label>
                    <Input type='text' placeholder="Enter title here" id="title"></Input>
                </FormGroup>
                <FormGroup>
                    <label for="descId">Course Description</label>
                    <Input type='textarea' placeholder="Enter course description"  id="descId" style={{height:150}}></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" style={{margin:3}}>Add Course</Button>
                    <Button color="warning ml-1">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;