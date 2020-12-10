import React from 'react';
import FooterTop from './FooterTop';

const Footer = () => {
    return (
        <footer>
            <FooterTop />
            <div className="footer-bottom">
                <p className="text-center text-white p-2">
                    Copyright © 2020 Code Partner IT Solutions Pvt. Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;