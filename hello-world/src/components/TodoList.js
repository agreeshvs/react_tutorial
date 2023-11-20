import React from 'react'
import { people } from './ScientistData';
import { getImageUrl } from './utils';

function TodoList() {

    const chemist = people.filter( persons =>     persons.profession === 'chemist' );
    const chemistListItems = chemist.map( persons => 
        <li style={{
            'display':'flex'
        }}>
            <img src={getImageUrl(persons)} style={{
                borderRadius: '50%'
            }}/>
            <p>
                <b>{persons.name}</b>
                {' ' + persons.profession + ' '}
                known for {persons.accomplishment}
            </p>
        </li>
        )
    const others = people.filter( persons => persons.profession !== 'chemist');
    const otherList = others.map( persons =>
        <li style={{
            'display':'flex',
            
        }}>
            <img src={getImageUrl(persons)} style={{
                borderRadius: '50%'
            }}/>
            <p>
                <b>{persons.name}</b>
                {' ' + persons.profession + ' '}
                known for {persons.accomplishment}
            </p>
        </li>)
  return (
        <div>
            <h1>Scientist List</h1>
            <h3>Chemist</h3>
            <ul style={
                {
                    'listStyle': 'none',
                    'color': 'green',
                    'display': 'flex',
                    'flexDirection': 'column'
                }
            }>
                {chemistListItems}
            </ul>
            <h3>Everyone Else</h3>
            <ul style={
                {
                    'listStyle': 'none',
                    'color': 'green',
                    'display': 'flex',
                    'flexDirection': 'column'
                }
            }>
                {otherList}
            </ul>
        </div>
    )
}

export default TodoList
