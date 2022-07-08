import React from "react";
import {  ListGroup, ListGroupItem } from "reactstrap";

function Menus(){
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action>
                Add Courses
            </ListGroupItem>
            <ListGroupItem tag="a" href="/view-courses" action>
                View Courses
            </ListGroupItem>
            <ListGroupItem tag="a" href="/about" action>
                About
            </ListGroupItem>
            <ListGroupItem tag="a" href="/contact" action>
                Contact
            </ListGroupItem>
        </ListGroup>
    )
}

export default Menus;