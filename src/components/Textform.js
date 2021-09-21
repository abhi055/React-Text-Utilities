import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("upercase click" + text )
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase","success");
    }
    const handleLowerClick = () => {
        // console.log("lowercase click" + text )
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase","success");
    }
    const handleClearClick = () => {
        // console.log("clear click" + text )
        let newText = ('');
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleTrimClick = () => {
        // console.log("trim click" + text )
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleCopy = () => {
        // let newText = text;
        // newText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
    }
    
    const handleOnChange = (event) => {
        // console.log("handleOnChange click")
        setText(event.target.value);
    }

    // const wordCount = () => {
    //     if(text.endsWith(' ')){
    //         return (text.split(' ').length) - 1;
    //     }
    //     else{
    //         return text.split(' ').length;
    //     }
    // }



    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : 'black',color: props.mode === 'light' ? 'black' : 'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTrimClick}>Trim Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
