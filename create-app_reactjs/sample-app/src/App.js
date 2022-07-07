import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import React from 'react';

function App() {
  return (
    
    <div>
      <Header name='Yochi' title='First card'/>
      <hr/>
      <Header name='zoya' title='Second card'/>
      <hr/>
      <Header name='namchin' title='Third card'/>
      <hr/>
    </div>
  );
}

export default App;
