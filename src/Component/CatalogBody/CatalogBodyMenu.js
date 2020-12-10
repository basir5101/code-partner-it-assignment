import React from 'react';
import { Link } from 'react-router-dom';

const CatalogBodyMenu = () => {
    return (
        <div>
            <ul>
                <li className = 'd-flex'>
                    <Link>STYLE </Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>CATEGORY</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>STYLE</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>SIZE</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>PRICE</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>COLOR</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>ACTIVITY</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>MATERIAL</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>STRAP/HANDLE</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>FEATURE</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>GENDER</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>PATTERN</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
                <li className = 'd-flex'>
                    <Link>CLIMATE</Link>
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </li>
            </ul>
        </div>
    );
};

export default CatalogBodyMenu;