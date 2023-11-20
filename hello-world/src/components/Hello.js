import React from "react";

const Hello = () =>{
    // JSX method
    /* return (
        <div className='classname'>
            <h1>Hello Agreesh</h1>
        </div>
    ) */

    return React.createElement(
    'div',
    {
        id:'hello', 
        className:'classname'
    },
    React.createElement(
        'h1',
        null,
        'Hello Agreesh'
        )
    )
}

export default Hello;