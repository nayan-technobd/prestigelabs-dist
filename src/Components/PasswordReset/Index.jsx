import React, { PureComponent } from 'react';

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
                <div class="site-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <main>
                                    <div class="page-content entry-content">
                                        <div class="page-title">Lost password</div>
                                        <div class="">
                                            <div class="alert-wrapper">
                                                <ul class="alert-error">
                                                    <li> Enter a username or email address.	</li>
                                                </ul>
                                            </div>
                                            <form method="post" class="lost_reset_password">
                                                <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                                                <p class="user_name_email_field">
                                                    <label for="user_login">Username or email</label>
                                                    <input class="" type="text" name="user_login" id="user_login" autocomplete="username" />
                                                </p>
                                                <div class="clearfix"></div>
                                                <p class="">
                                                    <input type="hidden" name="wc_reset_password" value="true" />
                                                    <button type="submit" class="cus_button" value="Reset password">Reset password</button>
                                                </p>
                                                <input type="hidden" id="e" name="" value="" />
                                                <input type="hidden" name="" value="" />
                                            </form>
                                        </div>
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