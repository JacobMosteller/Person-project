import React, { Component } from 'react'

class Authlogin extends Component {
    render() {
        return (
            <div>
    <p>Username</p>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <p>Password</p>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <p></p>
    <button>Login</button>
            </div>
        )
    }
}
export default Authlogin