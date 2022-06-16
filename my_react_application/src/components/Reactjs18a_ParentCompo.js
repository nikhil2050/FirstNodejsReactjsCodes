import React,{Component} from 'react'
import RegularCompo from './Reactjs18b_RegularCompo'
import PureCompo from './Reactjs18c_PureCompo'

/*
 *  NOTE: Read NKReadme.txt
 */ 
class ParentComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name: 'Hulk'
        }
    }
    
    /* NOTE: Update the state repeatedly*/
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name:'Hulk'
            })
        }, 2000)
    }

    render() {
        console.log('***************Parent Compo Render***************')
        return (
            <div>
                <hr/>
                Parent Component
                <RegularCompo name={this.state.name}/>
                <PureCompo name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent