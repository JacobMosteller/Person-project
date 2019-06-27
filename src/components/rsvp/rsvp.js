import React, { Component } from 'react'

class Rsvp extends Component {
    render() {
        return (
            <div>
                <p>Name:</p>
                <input type="text" placeholder="Name"/>
                <p>Are you comming?</p>
                <select>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <p>Address line 1:</p>
                <input type="text" placeholder="Address line 1"/>
                <p>Address line 2:</p>
                <input type="text" placeholder="Address line 2"/>
                <p>City:</p>
                <input type="text" placeholder="City"/>
                <p>State:</p>
                <input type="text" placeholder="State"/>
                <p>Zip code:</p>
                <input type="text" placeholder="Zip code"/>
                <p>What song would you like to hear?:</p>
                <input type="text" placeholder="Song"/>
                <p></p>
                <button>Submit</button>

            </div>
        )
    }
}

export default Rsvp