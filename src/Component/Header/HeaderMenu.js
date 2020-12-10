import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <section className = 'header-menu'>
            <div className = 'container'>
                <ul>
                    <li>
                        <Link>What's New</Link>
                    </li>
                    <li>
                        <Link>Women</Link>
                    </li>
                    <li>
                        <Link>Men</Link>
                    </li>
                    <li>
                        <Link>Gear</Link>
                    </li>
                    <li>
                        <Link>Wholesale</Link>
                    </li>
                    <li>
                        <Link>Sale</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HeaderMenu;