import React, {Component} from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            name:'Nik'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB static-getDerivedStateFromProps')
        return null
    }

    render() {
        console.log('LifecycleB render')
        return(
            <div>
                Lifecycle B
            </div>
        )
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

}

export default LifecycleB

