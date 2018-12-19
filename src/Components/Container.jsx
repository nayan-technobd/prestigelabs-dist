import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login/Index';
import Registration from './Registration/Index';
import PasswordReset from './PasswordReset/Index';
import TermOfUse from './Pages/TermOfUse';

class Container extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    changeHandler = (e) => {
        [e.target.name] = e.target.value;
    }

    render() { 
        return (
            <React.Fragment>
                <Route path='/' exact component={Login} />
                <Route path='/signup' component={Registration} />
                <Route path='/password-reset' component={PasswordReset} />
                <Route path='/terms-of-use' component={TermOfUse} />
            </React.Fragment>
        );
    }
}
 
export default Container;