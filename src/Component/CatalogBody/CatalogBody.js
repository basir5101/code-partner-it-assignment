import React from 'react';
import CatalogBodyMenu from './CatalogBodyMenu';
import './CatalogBody.css'
import { Link } from 'react-router-dom';

const CatalogBody = () => {
    return (
        <div className = 'container catalog-body'>
            <div className="row">
                <div className="col-sm-3">
                    <p>Shopping Option</p>
                </div>
                <div className="col-sm-6">
                    <p>items 1-9 of 32</p>
                </div>
                <div className="col-sm-3">
                    <p>Sort by</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <CatalogBodyMenu />
                    <div>
                        <h6>Compare Products <small>(2 items)</small> </h6>
                        <p>X <Link to = '/'>Summit Watch</Link> </p>
                        <p>X <Link to = '/'>Cruise Dual Analog Watch</Link> </p>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6>$59.00</h6>
                                    <div className="d-flex cart-action justify-content-between align-items-center my-3">
                                        <button>Add to cart</button>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6>$59.00</h6>
                                    <div className="d-flex cart-action justify-content-between align-items-center my-3">
                                        <button>Add to cart</button>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6>$59.00</h6>
                                    <div className="d-flex cart-action justify-content-between align-items-center my-3">
                                        <button>Add to cart</button>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6>$59.00</h6>
                                    <div className="d-flex cart-action justify-content-between align-items-center my-3">
                                        <button>Add to cart</button>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6>$59.00</h6>
                                    <div className="d-flex cart-action justify-content-between align-items-center my-3">
                                        <button>Add to cart</button>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6>$59.00</h6>
                                    <div className="d-flex cart-action justify-content-between align-items-center my-3">
                                        <button>Add to cart</button>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6>$59.00</h6>
                                    <div className="d-flex cart-action justify-content-between align-items-center my-3">
                                        <button>Add to cart</button>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6>$59.00</h6>
                                    <div className="d-flex cart-action justify-content-between align-items-center my-3">
                                        <button>Add to cart</button>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <div className="cart-product">
                                <div className="product-image">

                                </div>
                                <div className="product-details">
                                    <h4>Fusion Backpack</h4>
                                    <div className = 'd-flex justify-content-between'>
                                        <div>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                            <span class="fa fa-star star-unchecked"></span>
                                        </div>
                                    <div>
                                        <Link to = '/'>3 reviews</Link>                                             </div>
                                    </div>
                                    <h6> <small>as low as</small> $59.00</h6>
                                    <p className = 'size'>
                                        <span>32</span>
                                        <span>33</span>
                                        <span>34</span>
                                        <span>35</span>
                                    </p>
                                    <p className="colors">
                                        <span style = {{backgroundColor: '#f0f0f0'}}></span>
                                        <span style = {{backgroundColor: '#C8C8C8'}}></span>
                                        <span style = {{backgroundColor: '#8B8B8B'}}></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className = 'page-number'>
                            <span className = 'active'>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span style = {{textDecoration: 'none', padding: '5px 10px', backgroundColor:'#f0f0f0'}}>></span>
                        </div>
                        <div>
                            <p> Show <span style = {{ padding: '5px 10px', backgroundColor:'#f0f0f0'}}>9<i class="fa fa-arrow-down px-2" aria-hidden="true"></i></span> per page </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogBody;