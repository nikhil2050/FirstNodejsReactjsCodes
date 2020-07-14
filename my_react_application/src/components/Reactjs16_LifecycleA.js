import React, {Component} from 'react'
import LifecycleB from './Reactjs16_LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'Nik'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA static-getDerivedStateFromProps')
        return null
    }

    render() {
        console.log('LifecycleA render')
        return(
            <div>
                <hr/>
                Lifecycle A
                <LifecycleB />
            </div>
        )
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

}

export default LifecycleA

