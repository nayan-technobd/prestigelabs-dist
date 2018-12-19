import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Index extends PureComponent {
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
                <div className="site-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <main className="">
                                    <h3 className="page-title">My account</h3>
                                    <div className="user_login">
                                        <h2>Login</h2>
                                        <form className="action_form">
                                            <div className="form-group">
                                                <label htmlFor="username">Username or email address <span className="required">*</span></label>
                                                <input type="text" className="cus_field" name="username" id="username" value="" onChange={this.changeHandler} />			
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password <span className="required">*</span></label>
                                                <input className="cus_field" type="password" name="password" id="password" onChange={this.changeHandler} />
                                            </div>
                                            <div className="form-group">
                                                <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="" />
                                                <input type="hidden" name="_wp_http_referer" value="/my-account/" />				
                                                <button type="submit" className="cus_button" name="login" value="Login">Login</button>
                                                <label className="login_remember">
                                                    <input className="input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="" onChange={this.changeHandler} /> <span>Remember me</span>
                                                </label>
                                                <div className="new_distributor_sign_up"><NavLink activeClassName='active' to="/signup" > New Distributor? Sign up</NavLink></div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="lost_password">
                                            <NavLink activeClassName='active' to="/password-reset"> Lost your password?</NavLink>
                                            </div>
                                            <div className="lost_password"><a href="mailto:support@prestigelabs.com">Lost your email or username?</a></div>
                                        </form>
                                        <div className="clearfix"></div>
                                        <span className="return_to_main_site"><a href="#" >Return to main site</a></span>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Index;