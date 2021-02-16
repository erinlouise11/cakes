import React, { useState } from "react";
import './App.css';
import Slider from 'react-slick';
import * as s from './styles';
import {Link, NavLink, Outlet} from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import logo from './img/logo.png';
import lady from './img/ladySmile.jpg';
import balloons from './img/balloons.jpg';
import cake from './img/cake.jpg';
import middle from './img/package.jpg';
import cupcakes from './img/rainbowCupcakes.jpg';

import cake1 from './img/cake1.jpg';
import cake2 from './img/cake2.jpg';
import cake3 from './img/cake3.jpg';
import cake4 from './img/cake4.jpg';
import cake5 from './img/cake5.jpg';
import cake6 from './img/cake6.jpg';
import cake7 from './img/cake7.jpg';
import cake8 from './img/cake8.jpg';
import cake9 from './img/cake9.jpg';
import cake10 from './img/cake10.jpg';
import cake11 from './img/cake11.jpg';

const images = [cake, cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9, cake10, cake11];

export function Home() {
    return (
        <>
            <s.HeroDivBig className="home-hero bg">
                <s.homeHeroFlex className="hero-intro-div">
                    <s.H1>yummm...</s.H1>
                    <s.largerP>Our delicious products are hand crafted and home baked. Shipped with love all over the US.</s.largerP>
                    <s.buttonDiv className="button-container">
                        <Link to="/order"><s.pinkButton className="button" type="button">ORDER NOW</s.pinkButton></Link>
                        <Link to="/products"><s.darkButton className="button" type="button">SEE PRODUCTS</s.darkButton></Link>
                    </s.buttonDiv>                    
                </s.homeHeroFlex>
            </s.HeroDivBig>           
            <s.Nav>
                <s.Ul>
                    <NavLink className="nav-link" to="/products"><s.Li>Products</s.Li></NavLink>
                    <NavLink className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></NavLink>
                    <NavLink className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></NavLink>
                    <NavLink className="nav-link" to="/about"><s.Li>Our Story</s.Li></NavLink>
                    <NavLink className="nav-link" to="/order"><s.Li>Order</s.Li></NavLink>
                </s.Ul>
            </s.Nav>

            <s.whiteDiv className="bio-div white">
                <s.divImg src={lady} />
                <s.divInfo>
                    <s.H2>the short intro</s.H2>
                    <s.smallerP>Since a love for baking arose from a high school bake sale, the art of cakes and cupcakes have been what I live for. I can't wait for you to experience some Cool AF Cakes!</s.smallerP>
                    <Link to="/about"><s.darkButton className="button" type="button">LEARN MORE</s.darkButton></Link>
                </s.divInfo>
            </s.whiteDiv>

            <s.darkDiv className="products-div dark">
                <s.divInfoDark>
                    <s.H2 className="dark-h2">cakes, cupcakes, or both?</s.H2>
                    <s.smallerP className="dark-p">We offer 'cake with cupcakes' packages for the special occasions that need a little extra!</s.smallerP>
                    <Link to="/products"><s.bigPinkButton className="button" type="button">SEE ALL PRODUCTS</s.bigPinkButton></Link>
                </s.divInfoDark>
                <s.divImages>
                    <s.sideImg src={cake} />
                    <s.midImg src={middle} /> 
                    <s.sideImg src={cupcakes} />
                </s.divImages>
            </s.darkDiv>
   
            <s.whiteDiv className="occasions-div white">
                <s.divImg src={balloons} />
                <s.divInfo>
                    <s.H2>celebrations or tragedies</s.H2>
                    <s.smallerP>No matter the occasion, make it special with a Cool AF Cakes product!</s.smallerP>
                    <Link to="/occasions"><s.darkButton className="button" type="button">OCCASIONS</s.darkButton></Link>
                </s.divInfo>
            </s.whiteDiv>
            
            <s.darkDiv className="reviews-div dark">

            </s.darkDiv>
        </>       
    );
}

export function Products() {
    return (
        <>
            <s.HeroDivSmall className="products-hero bg">
                <s.heroTitleFlex className="hero-intro-div">
                    <s.H1>products</s.H1>
                </s.heroTitleFlex>
            </s.HeroDivSmall> 
            <s.Nav>
                <s.Ul>
                    <NavLink activeClassName="selected" className="nav-link" to="/products"><s.Li>Products</s.Li></NavLink>
                    <NavLink activeClassName="selected" className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></NavLink>
                    <NavLink className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></NavLink>
                    <NavLink activeClassName="selected" className="nav-link" to="/about"><s.Li>Our Story</s.Li></NavLink>
                    <NavLink activeClassName="selected" className="nav-link" to="/order"><s.Li>Order</s.Li></NavLink>
                </s.Ul>
            </s.Nav>

            <s.divSubNav>
                <NavLink activeClassName="sub-selected" className="sub-nav-link" to="/products/cakes">cakes</NavLink>
                <NavLink activeClassName="sub-selected" className="sub-nav-link" to="/products/cupcakes">cupcakes</NavLink>
                <NavLink activeClassName="sub-selected" className="sub-nav-link" to="/products/packages">packages</NavLink>
            </s.divSubNav>
            <Outlet />    
        </>        
    );
}

export function Cakes() {
    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />                
            </div>
        );
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />                
            </div>
        );
    }

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true, 
        lazyLoad: true, 
        speed: 300, 
        slidesToShow: 3, 
        centerMode: true, 
        centerPadding: 0,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div>
            <s.productsDivContent className="product-text-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Ut eu tempus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue. Maecenas fringilla arcu augue, sit amet egestas tellus vestibulum eu. Suspendisse potenti. Cras dignissim, elit non hendrerit elementum, odio nibh consectetur mauris, a pretium lorem justo eget mi. <br/><br/>Integer euismod risus nec erat scelerisque, a imperdiet ante placerat. Ut vel tellus non diam tincidunt consequat vel id diam. Aenean ac mi ipsum.</p>
                <Link to="/order"><s.pinkButton className="button" type="button">ORDER NOW</s.pinkButton></Link>
            </s.productsDivContent>
            <div className="image-slider-div">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <img className="carousel-img" src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export function Cupcakes() {
    return (
        <s.productsDiv>
            <s.productsDivContent className="product-text-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Ut eu tempus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue. Maecenas fringilla arcu augue, sit amet egestas tellus vestibulum eu. Suspendisse potenti. Cras dignissim, elit non hendrerit elementum, odio nibh consectetur mauris, a pretium lorem justo eget mi. <br/><br/>Integer euismod risus nec erat scelerisque, a imperdiet ante placerat. Ut vel tellus non diam tincidunt consequat vel id diam. Aenean ac mi ipsum.</p>
                <Link to="/order"><s.pinkButton className="button" type="button">ORDER NOW</s.pinkButton></Link>
            </s.productsDivContent>
            <s.productsDivContent className="image-slider-div">

            </s.productsDivContent>
        </s.productsDiv>
    );
}

export function Packages() {
    return (
        <s.productsDiv>
            <s.productsDivContent className="product-text-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Ut eu tempus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue. Maecenas fringilla arcu augue, sit amet egestas tellus vestibulum eu. Suspendisse potenti. Cras dignissim, elit non hendrerit elementum, odio nibh consectetur mauris, a pretium lorem justo eget mi. <br/><br/>Integer euismod risus nec erat scelerisque, a imperdiet ante placerat. Ut vel tellus non diam tincidunt consequat vel id diam. Aenean ac mi ipsum.</p>
                <Link to="/order"><s.pinkButton className="button" type="button">ORDER NOW</s.pinkButton></Link>
            </s.productsDivContent>
            <s.productsDivContent className="image-slider-div">

            </s.productsDivContent>
        </s.productsDiv>
    );
}

export function Occasions() {
    return (
        <>
            <s.HeroDivSmall className="occasions-hero bg">
                <s.heroTitleFlex className="hero-intro-div">
                    <s.H1>occasions</s.H1>
                </s.heroTitleFlex>
            </s.HeroDivSmall> 
            <s.Nav>
                <s.Ul>
                    <NavLink className="nav-link" to="/products"><s.Li>Products</s.Li></NavLink>
                    <NavLink activeClassName="selected" className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></NavLink>
                    <NavLink className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></NavLink>
                    <NavLink className="nav-link" to="/about"><s.Li>Our Story</s.Li></NavLink>
                    <NavLink className="nav-link" to="/order"><s.Li>Order</s.Li></NavLink>
                </s.Ul>
            </s.Nav>
        </>        
    );
}

export function About() {
    return (
        <>
        <s.HeroDivSmall className="about-hero bg">
            <s.heroTitleFlex className="hero-intro-div">
                <s.H1>our story</s.H1>
            </s.heroTitleFlex>
        </s.HeroDivSmall> 
        <s.Nav>
            <s.Ul>
                <NavLink className="nav-link" to="/products"><s.Li>Products</s.Li></NavLink>
                <NavLink className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></NavLink>
                <NavLink className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></NavLink>
                <NavLink activeClassName="selected" className="nav-link" to="/about"><s.Li>Our Story</s.Li></NavLink>
                <NavLink className="nav-link" to="/order"><s.Li>Order</s.Li></NavLink>
            </s.Ul>
        </s.Nav>
    </>        
    );
}

export function Order() {
    return (
        <>
        <s.HeroDivSmall className="order-hero bg">
            <s.heroTitleFlex className="hero-intro-div">
                <s.H1>order now</s.H1>
            </s.heroTitleFlex>
        </s.HeroDivSmall> 
        <s.Nav>
            <s.Ul>
                <NavLink className="nav-link" to="/products"><s.Li>Products</s.Li></NavLink>
                <NavLink className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></NavLink>
                <NavLink className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></NavLink>
                <NavLink className="nav-link" to="/about"><s.Li>Our Story</s.Li></NavLink>
                <NavLink activeClassName="selected" className="nav-link" to="/order"><s.Li>Order</s.Li></NavLink>
            </s.Ul>
        </s.Nav>
    </>        
    );
}