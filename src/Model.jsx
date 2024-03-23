import React from 'react'
import "./model.css"

function Model({data}) {
  return (
    <div className='wrapper'>
    {data.length>0?data.map((data,i)=>{
       return  <div key={i} className='model-div'>
        <h1 className='heading'>{data.head?data.head:"Heading"}</h1>
        <p className='answer'>{data.body?data.body:"Body"}</p>
        </div>
    }):<div>No data found</div>}
  
    </div>
  )
}

export default Model