import React from 'react'
import { sculptureList } from './StateDataSet'
import { useState } from 'react';
function ComponentMemory() {
    const [index,setIndex] = useState(0)
    function nextButtonHandler(){
        if( index < sculptureList.length)
        setIndex(index+1)
    }
    function previousButtonHandler(){
        if( index > 0)
        setIndex(index-1)
    }
  return (
    <div style={{
        'width':'50%',
        'height':'246px',
        'textAlign' : 'left',
        margin: '20px'
        }}>
        <button onClick={previousButtonHandler} style={{
            margin: '10px'
        }}>Previous</button>
        <button onClick={nextButtonHandler}>Next</button>
        <div>
            <h2>
                {sculptureList[index].name} by {sculptureList[index].artist}
            </h2>
            <p>{index+1} of {sculptureList.length}</p>
            <img src={sculptureList[index].url}  alt={sculptureList[index].alt}/>
            <p>{sculptureList[index].description}</p>
        </div>
    </div>
  )
}

export default ComponentMemory
