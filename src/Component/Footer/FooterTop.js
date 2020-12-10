import { Link } from '@material-ui/core';
import React from 'react';
import './Footer.css';

const FooterTop = () => {
    return (
        <div className = 'footer-top py-3' >
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <ul>
                                <li>
                                    <Link>About us</Link>
                                </li>
                                <li>
                                    <Link>Customer Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <ul>
                                <li>
                                    <Link>Privacy and Cookie Policy</Link>
                                </li>
                                <li>
                                    <Link>Search Terms</Link>
                                </li>
                                <li>
                                    <Link>Orders and Returns</Link>
                                </li>
                                <li>
                                    <Link>Advanced Search</Link>
                                </li>
                                <li>
                                    <Link>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className = 'subscribe'>
                            <div class="input-group md-form form-sm form-2 mx-5 pl-0">
                            <span className="fa fa-envelope email-icon"></span>
                                <input class="form-control my-0 py-1 pl-5" type="text" placeholder="Enter your email address" aria-label="Search"/>
                                <div class="input-group-append">
                                    <span style = {{backgroundColor: '#828282'}} class="text-white input-group-text red lighten-3" id="basic-text1">Subscribe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;