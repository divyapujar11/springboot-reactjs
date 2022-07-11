import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course'
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  // const btnhandle = () =>{
  //   toast("my first toast meassage");

  //   toast.success("DONE",{
  //     position:'top-center'
  //   })

  //   toast.error("SOMETHING IS WRONG",{
  //     position:'bottom-left'
  //   })
  // }
  return (
    <div>
      <ToastContainer />
      {/* <Home/>
      <Allcourses></Allcourses>
      <AddCourse></AddCourse> */}
      <Container>
        <Header />
        <Row>
          <Col md={4}><Menus /></Col>
          <Col md={8}>
            {/* <Home/> */}
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<Allcourses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
