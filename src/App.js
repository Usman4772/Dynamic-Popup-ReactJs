import './App.css';
import Model from './Model';
import { useState,useRef } from 'react';
import {Route,Routes,NavLink,Router} from "react-router-dom"
function App() {
  const headingInput=useRef(null)
  const bodyInput=useRef(null)
  const [show,setShow]=useState(false)
  const [data,setData]=useState([])
 function handleToggle(){
  setShow(prev=>!prev) 
 }
 function handleSetData(){
  let head=headingInput.current.value
  let body=bodyInput.current.value
setData(prev=>([
  ...prev,{
    head,
    body
  }
]))
headingInput.current.value=""
bodyInput.current.value=""
 }

  return (
    <div className="App">
    <div className='form'>
    <h1>Add Your Data</h1>
<input type='text' className='heading' placeholder='Add Question' ref={headingInput}/>
<textarea className='body' placeholder='Enter your answer' ref={bodyInput}></textarea>
<button onClick={handleSetData}>Add</button>
<button onClick={handleToggle} className='popup-btn'>{show?"Close":"Open"} popup</button>
</div>
<div className='model'>
{show?<Model data={data}></Model>:null}
</div>

    </div>
  
  );
}

export default App;
