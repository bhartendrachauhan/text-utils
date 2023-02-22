import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const convertUppercase = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const changeText = (event)=>{
        setText(event.target.value)
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Enter your text below...</label>
                <textarea className="form-control" placeholder='Enter your text here' value={text} onInput={changeText} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={convertUppercase}>Convert to uppercase</button>
        </div>
    )
}
