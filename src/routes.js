import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Authlogin from './components/authlogin/authlogin';
import Authview from './components/authview/authview';
import Options from './components/options/options';
import Registrys from './components/registrys/registrys';
import Rsvp from './components/rsvp/rsvp';


class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Authlogin}/>
                        <Route path="/registry" component={Registrys}/>
                        <Route path="/rsvp" component={Rsvp}/>
                        <Route path="/auth" component={Authview}/>
                        <Route path="/" component={Options}/>
                    </Switch>
                </Router>

            </div>
        )
    }
}

export default Routes