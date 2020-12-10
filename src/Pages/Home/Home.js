import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import HotItems from '../../Component/HotItem/HotItems';
import ProductsBody from '../../Component/ProductBody/ProductsBody';

const Home = () => {
    return (
        <div>
            <Header />
            <ProductsBody />
            <HotItems />
            <Footer />
        </div>
    );
};

export default Home;