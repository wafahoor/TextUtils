
import React, { useState } from 'react'
export default function TextForm(props) {

const handleUpClick = () =>{
    console.log("Uppercase was clicked");
    let newText= text.toUpperCase();
    setText(newText)
}

const handleLoClick = () =>{
  console.log("Lowercase was clicked");
  let newText= text.toLowerCase();
  setText(newText)
}

const handleText =()=>{
  let newText=''
  setText(newText)
}

const handleAlert =()=>{
  alert('hello');
}

const copyText =()=>{
  let boxText = document.getElementById("myBox");
  boxText.select()
  navigator.clipboard.writeText(boxText.value)

}

const removeSpaces =()=>{
 let newText=text.split(/[ ]+/)
 setText(newText.join(" "))

}

const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);

}

    const[text, setText]= useState('');
    
  return (
    <>

    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary" onClick={handleUpClick}> Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}> Covert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleText}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleAlert}>Alert</button>
<button className="btn btn-primary mx-1" onClick={copyText}>Copy text</button>
<button className="btn btn-primary mx-1" onClick={removeSpaces}>Remove extra spaces</button>




</div>
   
   <div className='container my-3'>
    <h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p> {0.008 * text.split(" ").length } Minutes Read</p>
<h2>Preview</h2>
<p>{text}</p>


   </div>
   
    </>
  )


}
