import React, { Component } from 'react';
import axios from 'axios';

class Authlogin extends Component {
    state={
        username:'',
        password:''
    }
    handleChange = (e) => {
        this.setState({
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
        <input type="text" value={this.state.username} placeholder="Username" name="username" onChange={this.handleChange}/>

    <p>Password</p>
        <input type="password" value={this.state.password} placeholder="Password" name="password" onChange={this.handleChange}/>

    <p></p>
    <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default Authlogin