<?php include 'header.php'; ?>
<body class="">

    <?php include 'menu.php'; ?>

    <div class="site-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <main class="">
                        <h3 class="page-title">My account</h3>
                        <div class="user_login">
                            <h2>Login</h2>
                            <form class="action_form">
                                <div class="form-group">
                                    <label for="username">Username or email address <span class="required">*</span></label>
                                    <input type="text" class="cus_field" name="username" id="username" value="" />			
                                </div>
                                <div class="form-group">
                                    <label for="password">Password <span class="required">*</span></label>
                                    <input class="cus_field" type="password" name="password" id="password" />
                                </div>
                                <div class="form-group">
                                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="" />
                                    <input type="hidden" name="_wp_http_referer" value="/my-account/" />				
                                    <button type="submit" class="cus_button" name="login" value="Login">Login</button>
                                    <label class="login_remember">
                                        <input class="input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="" /> <span>Remember me</span>
                                    </label>
                                    <div class="new_distributor_sign_up"><a href="registration.php">New Distributor? Sign up</a></div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="lost_password">
                                    <a href="forget_password.php">Lost your password?</a>
                                </div>
                                <div class="lost_password"><a href="mailto:support@prestigelabs.com">Lost your email or username?</a></div>
                            </form>
                            <div class="clearfix"></div>
                            <span class="return_to_main_site"><a href="#" style="">Return to main site</a></span>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>

    <?php include 'footer.php'; ?>