import React, { Component } from 'react'
import './App.css';
import Routes from './routes'
import {withRouter} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
  }

  goHome = () => {
    this.props.history.push('/home')
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
      <div className="App">
      <div className="overhead">
        <h5 onClick = {this.loginClick}>Login</h5>
        <h1 onClick={this.goHome}>Home</h1>
        <h1 onClick = {this.rsvpClick}>RSVP</h1>
        <h1 onClick = {this.registryClick}>Registry</h1>
      </div>
      <Routes/>
    </div>
    )
  }
}


export default withRouter(App);
