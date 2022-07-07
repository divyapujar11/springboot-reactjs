import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course' 

function App() {
  const btnhandle = () =>{
    toast("my first toast meassage");

    toast.success("DONE",{
      position:'top-center'
    })

    toast.error("SOMETHING IS WRONG",{
      position:'bottom-left'
    })
  }
  return (
    <div>
      <ToastContainer/>
      <Home/>
      <Course />
    </div>
  );
}

export default App;
