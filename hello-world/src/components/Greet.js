import React from "react";

/* function Greet(){
    return <h1>Hello Agreesh</h1>
} */
/* const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello <i>{props.name}</i> a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
} */

/* const Greet = ({name,heroName}) => {
    return (
        <div>
            <h1>Hello <i>{name}</i> a.k.a {heroName}</h1>
        </div>
    )
} */

// Destructure Props
const Greet = (props) => {
    const {name,heroName} = props;
    console.log(props)
    return (
        <div>
            <h1>Hello <i>{name}</i> a.k.a {heroName}</h1>
            {props.children}
        </div>
    )
}
export default Greet;