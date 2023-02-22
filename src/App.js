import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <React.Fragment>
    <Navbar title="TextUtils" />
    <div className='container my-3'>
      <TextForm heading="Enter the text to analyze"/>
    </div>
    </React.Fragment>
  );
}

export default App;
