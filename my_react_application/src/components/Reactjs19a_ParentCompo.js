import React, { Component } from 'react'
import { render } from 'react-dom'
import RegularFuncCompo from './Reactjs19b_RegularFuncCompo'
import MemoCompo from './Reactjs19c_MemoCompo'

class ParentCompoForMemo extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name: 'Red Hulk'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Red Hulk'
            })
        }, 2000)
    }
    
    render() {
        console.log("*****Rendering ParentCompoForMemo Component*****")
        return(
            <div>
            <hr />
            <h3>Memo Example</h3>
                <RegularFuncCompo name={this.state.name}/>
                <MemoCompo name={this.state.name}/>
            </div>
        )
    }
}

export default ParentCompoForMemo