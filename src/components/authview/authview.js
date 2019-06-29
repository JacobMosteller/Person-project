import React, { Component } from 'react'
import axios from 'axios';

class Authview extends Component {
    componentDidMount(){
        axios.get('/auth/user')
        .then((res)=>{
            if(!res.data.success){
                this.props.history.push('/login');
            }
        })
    }
    logout = () => {
        axios.post('/auth/logout')
        .then((res)=>{
            if(res.data.success){
                this.props.history.push('/login');
            }else{
                alert(res.data.err);
            }
        })
    }
    render() {
        return (
            <div>
                <h5 onClick={this.logout}>Logout</h5>
                This is how many people are comming:

                This is the list of songs people want:

                This is all the addresses:

            </div>
        )
    }
}

export default Authview