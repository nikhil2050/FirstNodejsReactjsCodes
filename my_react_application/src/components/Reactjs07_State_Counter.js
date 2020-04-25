import React, { Component } from 'react'

class Reactjs07_State_Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    increment() {
        /* 
         * Alternative 1 : setState(obj, callbackFunction())
         */ 
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log("Callback val:", this.state.count)})

        /*
         * Alternative 2 : setState using "previous" value
         *      setState((state,props) => (obj))
         */ 
        this.setState((prevState,props) => ({
            count: prevState.count+1
        }))
    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.increment()}>Increment</button>  
            </div>
        )
    }
}

export default Reactjs07_State_Counter
