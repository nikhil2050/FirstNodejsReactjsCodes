import React, {Component} from 'react'

// Step #1: Create Class component
class UseState_ClassComponentCounter extends Component {

    constructor(props) {
        super(props)

        // Step #2: Create state variable
        this.state = {
            count: 0
        }
    }

    // Step #3: Method to update the state variable
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div>
                
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default UseState_ClassComponentCounter