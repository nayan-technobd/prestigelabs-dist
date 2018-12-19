import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends PureComponent {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <footer className="site-footer">
                    <aside className="footer-widgets col-xs-12">
                        <div className="container">
                            <div className="row footer-top">
                                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                                    <section className="widget widget_text">
                                        <h3>CONTACT US</h3>	
                                        <div className="textwidget">
                                            <p className="footer_contact">Contact Us: 1-800-470-7560</p>
                                            <p className="footer_contact">
                                                Email: support@prestigelabs.com
                                                <br />
                                                GLS Labs LLC
                                                <br />
                                                30 N Gould St Ste 6466, Sheridan, WY 82801
                                            </p>
                                        </div>
                                    </section>                    
                                </div>
                                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                                    <section className="widget widget_nav_menu">
                                        <h3 >SHOP</h3>
                                        <div className="menu-footer-menu-c2-container">
                                            <ul className="menu">
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                                    <a href="#">All Products</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3  ">
                                    <section className="widget widget_nav_menu">
                                        <h3>INFORMATION</h3>
                                        <div className="menu-footer-menu-c3-container">
                                            <ul className="menu">
                                                <li className=""><a href="#">Get In Touch</a></li>
                                                <li className=""><a href="#">Privacy Policy</a></li>
                                                <li className=""><a href="#">Refund Policy</a></li>
                                                <li className=""><NavLink to="/terms-of-use"> Terms of Use</NavLink></li>
                                            </ul>
                                        </div>
                                    </section> 
                                </div>
                                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                                    <section id="text-4" className="widget widget_text">
                                        <h3 className="">Stay Connected</h3>
                                        <div className="textwidget">
                                            <ul className="social">
                                                <li className="facebook"><a title="Facebook" href="#" >Facebook</a></li>
                                            </ul>
                                            <div className="text">
                                                <h3><img src="images/text-title.png" alt="" /></h3>
                                                <div className="fb-like"></div>
                                            </div>
                                        </div>
                                    </section>    
                                </div>
                            </div>
                            <div className="row footer-top">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                                    <div className="footer-bottom">
                                        <div className="copyright">Copyright &copy; 2018 Prestige Labs,  All Rights Reserved.</div>
                                        <div id="payment-methods">
                                            <span className="payment-method">
                                                <a href="#" title="Visa">
                                                    <img src="images/icon-cc-visa.png" alt="visa" />
                                                </a>
                                            </span>
                                            <span className="payment-method">
                                                <a href="#" title="American express">
                                                    <img src="images/icon-cc-american-express.png" alt="american-express" />
                                                </a>
                                            </span>
                                            <span className="payment-method">
                                                <a href="#" title="Discover">
                                                    <img src="images/icon-cc-discover.png" alt="discover" />
                                                </a>
                                            </span>
                                            <span className="payment-method">
                                                <a href="#" title="Mastercard">
                                                    <img src="images/icon-cc-mastercard.png" alt="mastercard" />
                                                </a>
                                            </span>
                                        </div>          
                                    </div>  
                                </div>     
                            </div>
                        </div>
                    </aside>
                </footer>
                <a href="#" className="scrollup"><i className="fa fa-angle-up"></i></a>
            </React.Fragment>
        );
    }
}

export default Footer;