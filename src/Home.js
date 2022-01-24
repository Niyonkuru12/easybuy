import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img
                    className='home_image'
                    src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3740_.jpg" alt="" />
                    <div className="home_row">
                    <Product
                        id="12321341"
                        title="suinsist Smart Watch 2021 with Call, Fitness Tracker with Sleep Monitor, Activity Tracker with 1.54 Inch Touch HD Screen, ..."
                        price= {29.99}
                        image="https://m.media-amazon.com/images/I/71HCTiWkPSS._AC_UY218_.jpg"
                        rating={5}
                    />                      
                    <Product
                        id="49530094"
                        title="Samsung Tab A7 Lite Gray 32GB (SM-T220NZAAXAR)"
                        price={139}
                        image="https://m.media-amazon.com/images/I/819hAP4xoGS._AC_SX450_.jpg"
                        rating={5}
                    />                     
                    </div>

                    <div className="home_row">                        
                    <Product
                        id="23445938"
                        title="HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (Natural silver)"
                        price={513}
                        image="https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SX466_.jpg"
                        rating={5}
                    />                        
                    <Product
                        id="3254354345"
                        title="Padded Office Desk Chair with Armrests, Adjustable Height/Tilt, 360-Degree Swivel, 275Lb Capacity - Black"
                        price={99.99}
                        image="https://m.media-amazon.com/images/I/61v4APY-tIL._AC_SY450_.jpg"
                        rating={5}
                    />                        
                    <Product
                        id="4903850"
                        title="48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                        price={5}
                        image="https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_SX425_.jpg"
                        rating={5}
                    />                        
                    </div>

                    <div className="home_row">
                    <Product
                        id="23445930"
                        title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort"
                        price={223}
                        image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
                        rating={5}
                    />
                    </div>
            </div>
        </div>
    )
}

export default Home
