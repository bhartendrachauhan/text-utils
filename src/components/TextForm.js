import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const convertUppercase = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const convertLowercase = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const changeText = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter your text here' value={text} onInput={changeText} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={convertUppercase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={convertLowercase}>Convert to lowercase</button>
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>{text === ""? 0 : text.split(" ").length} words and {text.length} characters</p>
            <p><b>Average Time to read:</b> {0.48*text.split(" ").length} seconds</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
