import React from 'react';
import CatalogBody from '../../Component/CatalogBody/CatalogBody';
import CatalogBodyHeader from '../../Component/CatalogBodyHeader/CatalogBodyHeader';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import './Catalog.css'

const Catalog = () => {
    return (
        <div className = 'catalog'>
            <Header />
            <CatalogBodyHeader />
            <CatalogBody />
            <Footer />
        </div>
    );
};

export default Catalog;