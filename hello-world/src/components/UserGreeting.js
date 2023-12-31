import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {

    // short circuit operator
    return this.state.isLoggedIn && <div>Welcome user</div>

    // Ternary
    /* return(
      this.state.isLoggedIn ? (
        <div>Welcome user</div>
        ) : (
        <div>Welcome Guest</div>
        )
    ) */

    // Element Variables
   /*  let message
    if( this.state.isLoggedIn){
        message = <div>Welcome user</div>
    }
    else{
        <div>Welcome Guest</div>
    }
    return <div>{message}</div> */


    // if-else
    /* if( this.state.isLoggedIn){
        return (
            <div>Welcome user</div>
        )
    }
    else{
        return (
            <div>        
              <div>Welcome Guest</div>
            </div>
        )
    } */

  }
}

export default UserGreeting
