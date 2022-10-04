import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color: `white`,
    //     backgroundColor : `black`
    // })
    //const [btnText,setBtnText] = useState("Enable Light Mode");

    // const toggleStyle = ()=>{
    //     console.log("toggleStyle",myStyle.color);
    //     if(myStyle.color === `white`){
    //         console.log("myStyle.color",myStyle.color);
    //         setMyStyle({
    //             color: `black`,
    //             backgroundColor : `white`
    //         });
    //        // setBtnText("Enable Dark Mode");
    //     }else{
    //         setMyStyle({
    //             color: `white`,
    //             backgroundColor : `black`
    //         });
    //         //setBtnText("Enable Light Mode");
    //     }
    // }

  let myStyle = {
      color: props.mode === `dark`?`white`:`#042743`,
      backgroundColor : props.mode === `dark`?`rgb(36 74 104)`:`white`,
  

  }
  return (
    <div className='container' style={ {color: props.mode === `dark`?`white`:`#042743`}}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
         <div className="accordion-item">
         <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze Your text
           </button>
         </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>We provide free tools to help you with your daily tasks. You will find tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others. Check the current features below and feel free to recommend a new feature by contacting us.</strong>
      </div>
    </div>
         </div>
         <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Quote 1
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Rajanand</strong>
      </div>
    </div>
        </div> 
        <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Quote 2
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>Measuring programming progree by lines of code is like measuring aircraft building progree by weight. - Bill Gates</strong>
      </div>
    </div>
        </div>
      {/* <button  onClick = {toggleStyle} className="btn btn-primary mx-1" >{btnText}</button> */}
      </div>
    </div>
  )
}
