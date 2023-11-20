import React from 'react'

function Inline() {
    const heading = {
        color: "Green",
        font: '12px'
    }
  return (
    <div>
        <h1 className='error'>Error</h1>
      <h1 style={
        heading
      }>Inline</h1>
      <h1 className='sucess'>Inline-sucess</h1>
    </div>
  )
}

export default Inline
