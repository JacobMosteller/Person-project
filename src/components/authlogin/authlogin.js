import React, { Component } from 'react';
import axios from 'axios';

class Authlogin extends Component {
    state={
        username:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState=({
            [e.target.name]: e.target.value
        })
    }
    login = ()=>{
        const loginObj = {
            username:this.state.username,
            password:this.state.password
        }
        axios.post('/auth/login', loginObj)
        .then((res)=>{
            if(res.data.success){
                this.props.history.push('/auth')
            }else{
                alert(res.data.err)
            }
        })
    }
    render() {
        return (
            <div>
    <p>Username</p>
    <input type="text" placeholder="Enter Username" name="username" onChange={this.handleChange} required/>

    <p>Password</p>
    <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>

    <p></p>
    <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default Authlogin