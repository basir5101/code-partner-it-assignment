import React from 'react';

const HeaderMain = () => {
    return (
        <section className = 'header-main container my-4'>
            <div className="d-flex justify-content-between">
                <div>
                    <h4>Fortune Creation</h4>
                </div>
                <div className = 'd-flex'>
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search entire store here" />
                    </div>
                    <div className = 'pl-2'>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;