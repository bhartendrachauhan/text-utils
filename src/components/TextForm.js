import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const convertUppercase = ()=>{
        if(text.length>0){
            let newText = text.toUpperCase()
            setText(newText)
            props.showAlert('Converted to uppercase.','success')
        }
        else{
            props.showAlert('Enter some text','warning')
        }
    }
    const convertLowercase = ()=>{
        if(text.length>0){
            let newText = text.toLowerCase()
            setText(newText)
            props.showAlert('Converted to lowercase.','success')
        }
        else{
            props.showAlert('Enter some text.','warning')
        }
        
    }
    const handleCopy = ()=>{
        if(text.length>0){
            const text = document.getElementById('myBox')
            navigator.clipboard.writeText(text.value)
            props.showAlert('Copied to clipboard','success')
        }
        else{
            props.showAlert('Enter some text.','warning')
        }
        
    }
    const handleClear = ()=>{
        setText('')
    }
    const handleSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra Spaces removed.','success')

    }
    const changeText = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} placeholder='Enter your text here' value={text} onInput={changeText} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode==='light'?'secondary':'primary'} mx-1`} onClick={convertUppercase}>Convert to uppercase</button>
            <button className={`btn btn-${props.mode==='light'?'secondary':'primary'} mx-1`} onClick={convertLowercase}>Convert to lowercase</button>
            <button className={`btn btn-${props.mode==='light'?'secondary':'primary'} mx-1`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.mode==='light'?'secondary':'primary'} mx-1`} onClick={handleSpace}>Remove Extra Space</button>
            <button className={`btn btn-${props.mode==='light'?'secondary':'primary'} mx-1`} onClick={handleClear}>Clear Text</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter(x => x !== "").length} words and {text.length} characters</p>
            <p><b>Average Time to read:</b> {0.48*text.split(" ").length} seconds</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Your text will preview here'}</p>
        </div>
        </>
    )
}
