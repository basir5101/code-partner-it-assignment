import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
    return (
        <div className = 'header-top'>
            <div className="container d-flex justify-content-end align-items-center">
                <span>Welcome Home, </span>
                <Link to = '/create-account'>Sign In Create an Account</Link>
            </div>
        </div>
    );
};

export default HeaderTop;