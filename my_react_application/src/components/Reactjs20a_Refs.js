import React,{Component} from 'react'

/*
 * Approach #1: Using React.createRef()
 *  1. Create a reference using React.createRef()
 *  2. We attach a reference to an element using the ref prop and assign the property
 *  3. The element can be accessed using 'this.ref.current'
 * 
 * Use case: To focus on the text field on page load
 */
class Refs1 extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return(
            <div>
                <hr /> 
                Approach #1 : Refs Example :<br />

                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }
}

export default Refs1