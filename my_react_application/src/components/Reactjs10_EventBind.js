import React,{Component} from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props) 

        this.state = {
            message: 'Hello BindEvent' 
        }

        {/* Alternative #3 : Good performance (Binding in constructor)*/}
/*         this.clickHandler = this.clickHandler().bind(this) */

    }

    clickHandler() {
         this.setState({
            message: 'Goodbye BindEvent!'
        })
    }

        /* Alternative #4 : Good performance (Experimental)*/
/*     clickHandler = () => {
        this.setState({
            message: 'Goodbye BindEvent!'
        })
    }
 */
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                
                {/* Alternative #1 : Bad performance*/}
                <button onClick={this.clickHandler.bind(this)}>BindEvent button1</button>
                
                {/* Alternative #2 : Bad performance*/}
                <button onClick={() => this.clickHandler()}>BindEvent button2</button>                

                {/* Alternative #3 : Good performance (Binding in constructor)*/}
{/*                 <button onClick={this.clickHandler}>BindEvent button3</button> */}
            </div>
        )
    }
}

export default EventBind