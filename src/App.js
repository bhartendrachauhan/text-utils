import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <React.Fragment>
    <Navbar title="TextUtils" />
    {/* <TextForm heading="Enter the text to analyze"/> */}
    <About/>
    </React.Fragment>
  )
}

export default App;
