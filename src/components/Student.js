import React, {Component} from 'react'

class Student extends Component {
    constructor(){
        super()
        this.state = {
            students: [],
            Id: '',
            Name: '',
            Email: '',
            City: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        fetch("http://localhost:3001/api/student")
        .then((response) => response.json())
        .then((data) => this.setState({students: data}))
    }

    createStudent(){
        const postRequest = {
            method : 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                Name: this.state.Name,
                Email: this.state.Email,
                City: this.state.City
            })
        }

        fetch("http://localhost:3001/api/student", postRequest)
        .then((response) => response.json())
        .then((data) => {
            this.clearData()
            this.getStudents()
        })
    }

    editStudent(id){
        fetch(`http://localhost:3001/api/student/${id}`)
        .then((response) => response.json())
        .then((data) => this.setState({
            Id: data[0].Id,
            Name: data[0].Name,
            Email: data[0].Email,
            City: data[0].City
        }))
    }

    updateStudent(){
        const putRequest = {
            method : 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                Name: this.state.Name,
                Email: this.state.Email,
                City: this.state.City
            })
        }

        fetch(`http://localhost:3001/api/student/${this.state.Id}`, putRequest)
        .then((response) => response.json())
        .then((data) => {
            this.clearData()
            this.getStudents()
        })
    }

    deleteStudent(id){
        const deleteRequest = {
            method : 'DELETE',
            headers: {'content-type':'application/json'}
        }
        fetch(`http://localhost:3001/api/student/${id}`, deleteRequest )
        .then((response) => response.json())
        .then((data) => {
            this.clearData()
            this.getStudents()
        })
    }

    clearData(){
        this.setState({
            Id: '',
            Name: '',
            Email: '',
            City: ''
        })
    }

    render(){
        return(
            <div className="container">
                <h1>Student List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                    type="text"
                                    className="form-control"
                                    value={this.state.Id}
                                    readOnly
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    className="form-control"
                                    value={this.state.Name}
                                    onChange={(data) => this.setState({Name: data.target.value})}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    className="form-control"
                                    value={this.state.Email}
                                    onChange={(data) => this.setState({Email: data.target.value})}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    className="form-control"
                                    value={this.state.City}
                                    onChange={(data) => this.setState({City: data.target.value})}
                                />
                            </td>
                            <td>
                                <button className="btn btn-primary" 
                                        onClick={() => this.createStudent()}
                                >Add</button>
                            </td>
                            <td>
                                <button 
                                className="btn btn-primary"
                                onClick={() => {this.updateStudent()}}
                                >Update</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student) => {
                            return(
                                <tr key={student.Id}>
                                    <td>{student.Id}</td>
                                    <td>{student.Name}</td>
                                    <td>{student.Email}</td>
                                    <td>{student.City}</td>
                                    <td>
                                         <button 
                                            className="btn btn-danger"
                                            onClick={() => {this.deleteStudent(student.Id)}}
                                         >Delete</button>
                                    </td>
                                    <td>
                                         <button 
                                            className="btn btn-warning" 
                                            onClick={() => {this.editStudent(student.Id)}}
                                         >Edit
                                         </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student