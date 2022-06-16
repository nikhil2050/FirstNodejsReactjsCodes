import React,{Component} from 'react'

/*
 * Approach #2: Create a property and assign value = null
 *  1. First create a property and 
 *      then create a method that assigns the property with a DOM element passed as a parameter.
 *  2. We attach the 'ref' to an element using the method that inturn assigns the element to the property
 *  3. The element can be accessed using 'this.ref'
 * 
 * Use case: To focus on the text field on page load
 */
class Refs2 extends Component {

    constructor(props) {
        super(props)
        this.cbRef = null                   // CallbackRef
        this.setCbRef = (element) => {      // Setter for cbRef
            this.cbRef = element
        }
    }

    componentDidMount(){
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return(
            <div>
                <hr /> 
                Approach #2 : Callback Refs Example <br/>

                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }
}

export default Refs2