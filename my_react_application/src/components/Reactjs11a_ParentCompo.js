import React,{Component} from 'react'
import ChildCompo from './Reactjs11b_ChildCompo'
class ParentCompo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parentName : 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(param1) {
//        alert("Hello "+ this.state.parentName)

        // Use Template Literals
        alert(`Hello from ${this.state.parentName}. Child param :: ${param1}`)
    }

    render() {
        return (
            <div>
                <ChildCompo greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentCompo