import React, { Fragment } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MainNav from '../navs/MainNav';
import TopNav from '../navs/TopNav';
import {withRouter} from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MainLayout = (props) => {
    const {pathname}=props.location;
    console.log(pathname);
    return (
        <Fragment>
            <Helmet><title>
            تاپ لرن-صفحه اصلی
            </title></Helmet>
            <div className="landing-layer">
                <div className="container">
                    <TopNav/>
                    {pathname==="/"?<Header/>:null}
                </div>
            </div>


            <MainNav />

            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>
            <Footer />
        </Fragment>
    );

}
export default withRouter(MainLayout);