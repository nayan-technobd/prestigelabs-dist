import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

import Login from './Components/Login/Index';
import Registration from './Components/Registration/Index';
import PasswordReset from './Components/PasswordReset/Index';
import TermOfUse from './Components/Pages/TermOfUse';

// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Container from './Components/Container';

class App extends Component {
    render() {
      return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Container />
                {/* <Switch> */}
                
            {/* </Switch> */}
                <Footer />
            </React.Fragment>
        </BrowserRouter>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
