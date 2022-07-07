
import React from "react";
import {Button,Container} from 'reactstrap';

function Home(){
    return(
        <div class="jumbotron" >
            <h1 className="display-3">Learn code with Divya Pujar</h1>
            <p>
                This is a Courses Application. Building a application called Courses Application using reactjs with spring as a backend.
            </p>
            <Container>
                <Button color="primary">Start</Button>
            </Container>
            
            
        </div>
    )
}

export default Home;
