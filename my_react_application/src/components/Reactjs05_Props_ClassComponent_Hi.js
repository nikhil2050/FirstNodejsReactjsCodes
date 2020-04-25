import React, { Component } from 'react'

class Props_ClassComponent_Hi extends Component {
    render() {
        return (
            <div>
                <h1> Hi {this.props.desig} {this.props.name} </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Props_ClassComponent_Hi