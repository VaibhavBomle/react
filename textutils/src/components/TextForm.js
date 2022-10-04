import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    //console.log("handleUpClick "+text);
    let newText = text.toUpperCase();
   // setText("You have clicked handleUpClick");
    setText(newText);
    props.showAlert("Converted to upper case ","Success")
  }

  const handleLowerClick =()=>{
    //console.log("handleLowerClick "+text);
    let newText = text.toLowerCase();
   // setText("You have clicked handleLowerClick");
    setText(newText);
    props.showAlert("Converted to lower case ","Success")

  }

  const handleRemoveDoubleSpaceClick =()=>{
    let textContainSingleSpace = text.replace(/\s+/g, ' ').trim();
    setText(textContainSingleSpace);
    props.showAlert("Remove double space ","Success")
  }

  const handleOnChange =(event)=>{
   // console.log("handleOnChange");
   setText(event.target.value);
  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.TextFormshowAlert("Copied to clipboard! ","Successfully")

  }

  const clearText= () =>{
   setText("");
  }
  const [text,setText] = useState('');
  // text = "New Text" // Incorrect way to change the state
   //setText("new text"); // Corret way to change the state


  return (
    <>
    <div className="container my-3"   style = {{color : props.mode===`dark`?`white`:`#042743`}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3"> 
        <textarea
          className ="form-control" 
          value={text}
          onChange = {handleOnChange}
          style = {{backgroundColor : props.mode===`dark`?`#11376e`:`white`,color:props.mode===`dark`?`white`:`gray`}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveDoubleSpaceClick}>Remove Double Space</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3"   style = {{color : props.mode===`dark`?`white`:`#042743`}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words  {text.length} characters</p>
      <p>{0.0089 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text:"No Preview available..."}</p>
    </div>
    </>

  );
}