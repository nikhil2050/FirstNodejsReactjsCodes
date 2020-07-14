import React,{Component} from 'react'

class SampleForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic:'vue'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    handleCommentChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleTopicChange = (event) => {this.setState({topic: event.target.value})}

    handleSubmit = (event) => {
        alert(`Username:: ${this.state.username}, Comment:: ${this.state.comment}, Topic:: ${this.state.topic}` )
        event.preventDefault()                      // Add to maintain the entered values after Submit
    }

    render() {
        return (
            <div>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <h2>Sample Form</h2>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea value={this.state.comment} onChange={this.handleCommentChange} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="react">React Js</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue Js</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SampleForm