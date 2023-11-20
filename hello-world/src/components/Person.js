import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>I am {person.name} and My profession is {person.profession}</h2>
    </div>
  )
}

export default Person
