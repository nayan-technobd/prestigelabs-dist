import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <header className="site-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="header-top">
                                    <div className="top-widgets-right">			
                                        <div className="textwidget">Order online or call us 1-800-470-7560</div>		
                                    </div>
                                </div>
                                <div className="logo-wrapper">
                                    <div className="site-logo">
                                        <NavLink title="Prestige  Labs" activeClassName='active' to="/" exact><img src="images/cropped-logo-1.png" className="attachment-full size-full" alt="" title="" /></NavLink>
                                        {/* <a href="index.php" title="Prestige  Labs">
                                            <img src="images/cropped-logo-1.png" className="attachment-full size-full" alt="" title="" />	
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="site_menu">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <nav className="primary-nav">
                                            <div className="menu-main-menu-container">
                                                <ul id="menu-main-menu" className="menu">
                                                    <li className="active"><a href="product_list.php">Order Page</a></li>
                                                    <li className=""><a href="#">My account</a></li>
                                                </ul>
                                            </div>                   
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;