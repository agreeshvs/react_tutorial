import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        // this.state.count = this.state.count + 1; -- only called in the constructor
       /*  this.setState({
            count: this.state.count + 1
        },() =>{
            console.log('Callback value ',this.state.count)
        }) */

        this.setState( (prevState)=>({
          count: prevState.count + 1
        }),() => {
          console.log('Callback value ',this.state.count)
        })
    }

    incrementFive(){
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
    }
  render() {
    return (
      <div>
        <div>
            Count - {this.state.count}<br />
            <button onClick={()=>this.incrementFive()}>Increment</button>
        </div>
      </div>
    )
  }
}

export default Counter
