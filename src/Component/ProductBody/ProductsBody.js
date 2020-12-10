import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsBody.css';

const ProductsBody = () => {
    return (
        <section className = 'product-body container my-4'>
            {/* banner */}
            <div className="banner row">
                <div className="col-md-6">
                    <div>

                    </div>
                </div>
                <div className="col-md-6 pt-5 banner-product-details">
                    <div className = 'banner-product p-5 mr-4'>
                        <p>New Luma Yoga Collection</p>
                        <h4>Get fit and look fab in new <br/> seasonal styles</h4>
                        <button className="">Shop New Yoga</button>
                    </div>
                </div>
            </div>

            {/* offer products */}

            <div className="row offer-product my-4">
                <div  className="col-md-4">
                    <div style = {{minHeight: '663px', backgroundColor: '#e0e0e0'}} className = 'p-5'>
                        <h2>20% OFF</h2>
                        <p>Luma pants when you shop today*</p>
                        <Link to = '/shop'>Shop Pants ></Link>
                    </div>
                    <div className=''>
                        <div style = {{minHeight: '290px', minWidth: '725px', backgroundColor: '#e0e0e0'}}  className = 'p-5 mr-5 my-2'>
                            <div style = {{backgroundColor: '#f2f2f2'}} className=" p-4 d-inline-block">
                                <h2>Twice around, twice as nice</h2>
                                <p>Find conscientious, comfy clothing in our eco-friendly collection</p>
                                <Link to = '/shop'>Shop Eco-Friendly ></Link>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <div style = {{minHeight: '274px', backgroundColor: '#e0e0e0'}}  className = 'p-5  m-2'>
                                <h4>Even more ways to mix and match</h4>
                                <p>Buy 3 Luma tees get a 4th free</p>
                                <Link to = '/shop'><small>Shop Tees ></small></Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div style = {{minHeight: '369px', backgroundColor: '#e0e0e0'}}  className = 'p-5 m-2'>
                                <h4>Take it from Erin</h4>
                                <p>Luma founder Erin Renny shares her favorites!</p>
                                <Link to = '/shop'><small>Shop Erin Recommends ></small></Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div style = {{minHeight: '663px', backgroundColor: '#e0e0e0'}}  className = 'p-5 m-2'>
                                <div style = {{backgroundColor: '#f2f2f2'}} className="d-block p-4">
                                    <h4>Science meets <br/> performance</h4>
                                    <p>Wicking to raingear, Luma covers you</p>
                                    <Link to = '/shop'><small>Shop Performance ></small></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default ProductsBody;