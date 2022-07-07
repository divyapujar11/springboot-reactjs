import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';

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
      <h1> this is button components</h1>
      <Button color='success' outline onClick={btnhandle}>First React Button</Button>
    </div>
  );
}

export default App;
