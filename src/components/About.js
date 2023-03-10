import React, { useEffect, useState } from 'react'

export default function About(props) {
    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor: 'white'
    })
    useEffect(()=>{
        if(props.mode === 'light'){
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
            })
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor: 'black'
            })
        }
    },[props.mode])
    
  return (
    <>
    <div className='container my-3 rounded' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion my-2" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyse your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils provides you a way to analyse and manipulate your text. You can easily keep a word count and character count.
                    You can also find the average time to read the text. Apart from this, pre-built functionalities are also available to manipulate your text. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   All the features are available for free.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This website works in any browser such as Chrome, Firefox, Edge, Safare, Opera.
                    It suits to count characters in  blogs, books, excel documents, pdf documents, essays etc.
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
