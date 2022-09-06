import React, { Component } from 'react'

//order of form flow is when we type in the text box onchange method is triggered then 
// handleUsernameChange method will change the state value from empty string to typed value
//then this state is passed to the value attribute then we can see what we typed in the text box otherwise it will not allow to type
//text-->state--> onchange --> handleUsernameChange value --> state --> value --> dom
class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic:'angular'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {comments, username, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={this.handleUsernameChange} />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>

                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form