import React, {Component} from 'react'
import axios from 'axios'

class GetRequestHandle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            errorMsg: ''

        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/commentss')     // <<<===
            .then(response => {
                console.log(response)
                this.setState({comments: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: "Error fetching data from server..."})
            })
    }

    render() {
       const {comments, errorMsg} = this.state 
        return(
            <div>
                <h4> HTTP : GET</h4>
                <u>List of comments :</u>
                {comments.length 
                        ? comments.map(post => <div key={post.id}>{post.name}</div>)
                        : null
                }
                { errorMsg? <div>{errorMsg} </div> : null}
            </div>
        )
    }
}

export default GetRequestHandle