import React,{Component} from 'react'

class Event_ClassCompo_Click extends Component {
    clickHandler() {
        console.log("FuncCompo Click Event")
    }
    render() {
        return (
            <div>
                {/* NOTE: In handler, don't write paranthesis '()' i.e. function call */}
                <button onClick={this.clickHandler}>ClassCompo Click Event</button>
            </div>
        )
    }
}

export default Event_ClassCompo_Click