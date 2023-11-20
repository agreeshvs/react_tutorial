import React from 'react'
import { people } from './ScientistData';
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana'];
    const personList = people.map(person =>
        //Key proops
        <Person key={person.id} person={person} /> 
        )
    const nameList = names.map( (name) => 
    <h2>{name}</h2>
    )
  return (
    <div>{personList}</div>
  )
}

export default NameList
