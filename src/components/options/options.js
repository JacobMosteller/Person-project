import React, { Component } from 'react'

class Options extends Component {
    constructor(){
        super()
        this.state={
        }
    }

    loginClick = () => {
        this.props.history.push('/login')
    }

    rsvpClick = () => {
        this.props.history.push('/rsvp')
    }

    registryClick = () => {
        this.props.history.push('/registry')
    }
    render() {
        return (
            <div>
                <h5 onClick = {this.loginClick}>Login</h5>
                <h1>Welcome</h1>
                <h2>Kaylah and jacob</h2>
                <h4>9/21/19</h4>
                <h3 onClick = {this.rsvpClick}>RSVP</h3>
                <h3 onClick = {this.registryClick}>Registry</h3>
            </div>
        )
    }
}

export default Options