import React, { Component } from 'react'

import {Switch, Route} from 'react-router-dom';

import Authlogin from './components/authlogin/authlogin';
import Authview from './components/authview/authview';
import Options from './components/options/options';
import Registrys from './components/registrys/registrys';
import Rsvp from './components/rsvp/rsvp';

class Routes extends Component {
    render() {
        return (
            <div>
           <Switch>
                <Route path="/login" component={Authlogin}/>
                <Route path="/registry" component={Registrys}/>
                <Route path="/rsvp" component={Rsvp}/>
                <Route path="/auth" component={Authview}/>
                <Route exact path="/" component={Options}/>
            </Switch>
            </div>
        )
    }
}

export default Routes