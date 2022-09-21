import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    //console.log("handleUpClick "+text);
    let newText = text.toUpperCase();
   // setText("You have clicked handleUpClick");
    setText(newText);
  }

  const handleLowerClick =()=>{
    //console.log("handleLowerClick "+text);
    let newText = text.toLowerCase();
   // setText("You have clicked handleLowerClick");
    setText(newText);
  }

  const handleRemoveDoubleSpaceClick =()=>{
    let textContainSingleSpace = text.replace("  "," ");
    setText(textContainSingleSpace);
  }

  const handleOnChange =(event)=>{
   // console.log("handleOnChange");
   setText(event.target.value);
  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text,setText] = useState('');
  // text = "New Text" // Incorrect way to change the state
   //setText("new text"); // Corret way to change the state


  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3"> 
        <textarea
          className ="form-control" 
          value={text}
          onChange = {handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleRemoveDoubleSpaceClick}>Remove Double Space</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words  {text.length} characters</p>
      <p>{0.0089 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>

  );
}