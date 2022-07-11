import React, { Fragment, useEffect, useState } from "react";
import {Form,FormGroup,Label,Input, Container, Button, } from 'reactstrap';
import axios from "axios";
import {toast} from "react-toastify";
import base_url from "../api/bootapi";

function AddCourse(){
    useEffect(()=>{
        document.title="Add Course || CourseApp";
    },[])

    const [course,setCourse] = useState({})

    //handleform function
    const handleForm = (e) => {
        console.log(course)
        postdatatoserver(course);
        e.preventDefault()
    }

    //function to post data to server
    const postdatatoserver=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response)
                console.log("success")
                toast.success("course added")
            },
            (error)=>{
                console.log(error)
                console.log("something is wrong!")
                toast.error("Oh no! course not added")
            }
        )
    }
    

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill the Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label htmlFor="userId">Course Id</Label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId" onChange={(e)=>{setCourse({...course,id:e.target.value})}}></Input>
                </FormGroup>
                <FormGroup>
                    <label htmlFor='title'>Course Title</label>
                    <Input type='text' placeholder="Enter title here" id="title" onChange={(e)=>{setCourse({...course,title:e.target.value})}}></Input>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="descId">Course Description</label>
                    <Input type='textarea' placeholder="Enter course description"  id="descId" style={{height:150}} onChange={(e)=>{setCourse({...course,description:e.target.value})}} ></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success" style={{margin:3}}>Add Course</Button>
                    <Button type="reset" color="warning " onClick={(e)=>{setCourse({})}} >Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;