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
                    <div class="site-main">   
                        <div class="container">
                            <div class="rows">
                                <main class="site-content">
                                    <div class="page-content entry-content user_registration">
                                        <div class="page-title">Registration</div>
                                        <div class="registration-form">
                                            <div class="alert-wrapper">
                                                <ul class="alert-error">
                                                    <li> Enter a username or email address.	</li>
                                                </ul>
                                            </div>
                                            <form method="post" class="register action_form" enctype="multipart/form-data">
                                                <div class="form-group pull-left name_field">
                                                    <label for="reg_sr_firstname">First Name <span class="required">*</span></label>
                                                    <input type="text" class="cus_field" name="firstname" id="reg_sr_firstname" value="" />
                                                </div>
                                                <div class="form-group pull-right name_field">
                                                    <label for="reg_sr_lastname">Last Name <span class="required">*</span></label>
                                                    <input type="text" class="cus_field" name="lastname" id="reg_sr_lastname" value="" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="reg_username">Username <span class="required">*</span></label>
                                                    <input type="text" class="cus_field" name="username" id="reg_username" value="" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="reg_email">Email address <span class="required">*</span></label>
                                                    <input type="email" class="cus_field" name="email" id="reg_email" value="" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="reg_password">Password <span class="required">*</span></label>
                                                    <input type="password" class="cus_field" name="password" id="reg_password" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="reg_username">PayPal Account(To get the payout) <span class="required">*</span></label>
                                                    <input type="text" class="cus_field" name="paypal_account" id="paypal_account" value="" />
                                                </div>
                                                <div style={{left: '-999em', position: 'absolute'}}>
                                                    <label for="trap">Anti-spam</label>
                                                    <input type="text" name="email_2" id="trap" tabindex="-1" autocomplete="off" />
                                                </div>
                                                <div class="form-group input_type_file">
                                                    <label for="reg_file">W-9 Form (Please fill & sign W-9 form 
                                                        <a href="#" target="_blank">here</a>, after getting the W-9 downloaded form please attache following)
                                                    </label>
                                                    <input class="cus_field" type="file" name="pdf_file" value="" />
                                                </div>
                                                <div class="form-group input_type_file">
                                                    <label for="reg_file">Agreement Form (Please fill & sign agreement form <a href="#" target="_blank">here</a>, after getting the agreement downloaded form please attache following)</label>
                                                    <input class="cus_field" type="file" name="agreement_pdf_file" value="" />
                                                </div>
                                                <div class="clearfix"></div>        
                                                <input type="hidden" name="_user_registration_from_frontend" value="1" />
                                                <div class="form-group">
                                                    <label class="">
                                                        <input class="" name="terms_of_service_agree" type="checkbox" value="1" /> 
                                                        <span>Agree with
                                                            <a href="term_of_use.php" target="_blank">terms of service</a>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="">
                                                    <input type="hidden" id="" name="" value="" />
                                                    <input type="hidden" name="" value="" />	
                                                    <button type="submit" class="cus_button" name="login" value="Login">Register</button>
                                                </div>
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