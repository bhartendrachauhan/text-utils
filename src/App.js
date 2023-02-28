import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0e0b43'
      showAlert('Dark Mode Enabled.','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled.','success')
    }
  }
  return (
    <React.Fragment>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </React.Fragment>
  )
}

export default App;
