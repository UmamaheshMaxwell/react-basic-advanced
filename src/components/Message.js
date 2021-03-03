import React, {Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Hello Harsha and Guru !!!'
        }
    }

    changeMessage(){
       this.setState({message: 'Are you Joining the session Today ?'})
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1><br></br>
                <button 
                    className="btn btn-primary"
                    onClick={()=>this.changeMessage()}
                >Change Message</button>
            </div>
        )
    }
}

export default Message