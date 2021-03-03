import axios from 'axios'
import React, {Component} from 'react'

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            todos : []
        }
    }

    componentDidMount(){ 
        this.getTodos()
    }

    // getTodos(){
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((Response) => Response.json())
    //     .then((data) => this.setState({todos: data}))
    // }

    getTodos(){
        axios("https://jsonplaceholder.typicode.com/todos")
        .then((response) => this.setState({todos: response.data}))
    }

    render(){
        return (
            <div className="container">
                <h1>Fetching Todos API Data</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo) => {
                            return (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todo