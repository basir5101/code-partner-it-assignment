import React from 'react';
import HeaderTop from './HeaderTop';
import './Header.css';
import HeaderMain from './HeaderMain';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    return (
        <header>
            <HeaderTop />
            <HeaderMain />
            <HeaderMenu />
        </header>
    );
};

export default Header;