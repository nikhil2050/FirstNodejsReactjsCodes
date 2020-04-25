import React, {Component} from 'react'

class State_ClassCompo extends Component {
    constructor(){
        super()

        this.state = {
            message: "Welcome visitor"
        }
    }

    changeMsg(){
        this.setState( {
            message: "The state is changed now."
        })
    }
    render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMsg() }>Change State</button>
        </div>
        )
    }
}

export default State_ClassCompo