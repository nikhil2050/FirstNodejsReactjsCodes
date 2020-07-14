import React, { Component } from 'react'
/* import Container from '../Containers/Container' */

class HomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    valid(item, type) {
        let itemValue=item.target.value;
        switch(type) {
            case "name": {
                /* console.warn("item", itemValue, type) */
                if(itemValue.length < 4) {
                    item.target.style.color = "red";
                } else {
                    item.target.style.color = "";
                }
                this.setState({
                    name:itemValue
                })    

            }
            case "password": {
                /* console.warn("item", itemValue, type) */
                if(itemValue.length < 4) {
                    item.target.style.color = "red";
                } else {
                    item.target.style.color = "";
                }
                this.setState({
                    password:itemValue
                })    
            }
        }
//        console.warn("all", this.state)
    }

    submit() {
        let obj={}
        obj.name = this.state.name
        obj.password = this.state.password
        console.warn("Submit data", obj)
    }

    render() {
        return (
            <div>
                <h1> React  form submission and validation</h1>
                <input type="text" placeholder="Enter name" onChange={(item) => this.valid(item, "name")} /> <br/>
                <input type="password" placeholder="Enter password" onChange={(item) => this.valid(item, "password")} /> <br/>
                <button onClick={() => this.submit()}>Submit </button>
            </div>
        )
    }
}

export default HomeComponent