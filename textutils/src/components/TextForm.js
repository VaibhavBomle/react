import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    //console.log("handleUpClick "+text);
    let newText = text.toUpperCase();
   // setText("You have clicked handleUpClick");
    setText(newText);
  }

  const handleOnChange =(event)=>{
   // console.log("handleOnChange");
   setText(event.target.value);
  }
  const [text,setText] = useState('Enter Text here');
  // text = "New Text" // Incorrect way to change the state
   //setText("new text"); // Corret way to change the state


  return (
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
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}