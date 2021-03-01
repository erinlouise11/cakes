import React, { useState } from "react";
import './App.css';
import Slider from 'react-slick';
import * as s from './styles';
import {Link, NavLink, Outlet} from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import logo from './img/logo222.png';
import lady from './img/divImages/ladySmile.jpg';
import balloons from './img/divImages/balloons.jpg';
import cake from './img/cakes/cake.jpg';
import middle from './img/packages/package.jpg';
import cupcakes from './img/cupcakes/rainbowCupcakes.jpg';
import birthday from './img/divImages/birthday.jpg';
import wedding from './img/divImages/wedding.jpg';
import workfunction from './img/divImages/work.jpg';
import gender from './img/divImages/genderreveal.jpg';
import tragedy from './img/divImages/tragedy.jpg';
import fun from './img/divImages/forfun.jpg';

import cake1 from './img/cakes/cake1.jpg';
import cake2 from './img/cakes/cake2.jpg';
import cake3 from './img/cakes/cake3.jpg';
import cake4 from './img/cakes/cake4.jpg';
import cake5 from './img/cakes/cake5.jpg';
import cake7 from './img/cakes/cake7.jpg';
import cake8 from './img/cakes/cake8.jpg';
import cake9 from './img/cakes/cake9.jpg';
import cake10 from './img/cakes/cake10.jpg';
import cake11 from './img/cakes/cake11.jpg';   

import cc1 from './img/cupcakes/cupcakes1.jpg'; 
import cc2 from './img/cupcakes/cupcakes2.jpg';
import cc3 from './img/cupcakes/cupcakes3.jpg';
import cc4 from './img/cupcakes/cupcakes4.jpg';
import cc5 from './img/cupcakes/cupcakes5.jpg';
import cc6 from './img/cupcakes/cupcakes6.jpg';
import cc7 from './img/cupcakes/cupcakes7.jpg';
import cc8 from './img/cupcakes/cupcakes8.jpg';
import cc10 from './img/cupcakes/cupcakes10.jpg';

import pack1 from './img/packages/package1.jpg';
import pack2 from './img/packages/package2.jpg';
import pack3 from './img/packages/package3.jpg';
import pack4 from './img/packages/package4.jpg';

const cakeImages = [cake, cake1, cake2, cake3, cake4, cake5, cake7, cake8, cake9, cake10, cake11];
const cupcakeImages = [cupcakes, cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc10];
const packageImages = [middle, pack1, pack2, pack3, pack4];

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
                    <NavLink className="nav-link" to="/products/cakes"><s.Li>Products</s.Li></NavLink>
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
                    <NavLink activeClassName="selected" className="nav-link" to="/products/cakes"><s.Li>Products</s.Li></NavLink>
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
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        dots: true, 
        infinite: true, 
        lazyLoad: true, 
        speed: 300, 
        slidesToShow: 3, 
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: 0,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className="content-flex">
            <s.productsDivContent className="product-text-div">
                <s.smallerP className="products-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue. Maecenas fringilla arcu augue, sit amet egestas tellus vestibulum eu.</s.smallerP>
                <Link to="/order"><s.pinkButton className="button" type="button">ORDER NOW</s.pinkButton></Link>
            </s.productsDivContent>
            <div className="image-slider-div">
                <Slider {...settings}>
                    {cakeImages.map((img, idx) => (
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
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        dots: true, 
        infinite: true, 
        lazyLoad: true, 
        speed: 300, 
        slidesToShow: 3, 
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: 0,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className="content-flex">
            <s.productsDivContent className="product-text-div">
                <s.smallerP className="products-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue. Maecenas fringilla arcu augue, sit amet egestas tellus vestibulum eu.</s.smallerP>
                <Link to="/order"><s.pinkButton className="button" type="button">ORDER NOW</s.pinkButton></Link>
            </s.productsDivContent>
            <div className="image-slider-div">
                <Slider {...settings}>
                    {cupcakeImages.map((img, idx) => (
                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <img className="carousel-img" src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export function Packages() {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        dots: true, 
        infinite: true, 
        lazyLoad: true, 
        speed: 300, 
        slidesToShow: 3, 
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: 0,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    return (
        <div className="content-flex">
            <s.productsDivContent className="product-text-div">
                <s.smallerP className="products-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue. Maecenas fringilla arcu augue, sit amet egestas tellus vestibulum eu.</s.smallerP>
                <Link to="/order"><s.pinkButton className="button" type="button">ORDER NOW</s.pinkButton></Link>
            </s.productsDivContent>
            <div className="image-slider-div">
                <Slider {...settings}>
                    {packageImages.map((img, idx) => (
                        <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                            <img className="carousel-img" src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
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
                    <NavLink className="nav-link" to="/products/cakes"><s.Li>Products</s.Li></NavLink>
                    <NavLink activeClassName="selected" className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></NavLink>
                    <NavLink className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></NavLink>
                    <NavLink className="nav-link" to="/about"><s.Li>Our Story</s.Li></NavLink>
                    <NavLink className="nav-link" to="/order"><s.Li>Order</s.Li></NavLink>
                </s.Ul>
            </s.Nav>

            <s.smallWhiteDiv className="occasions-info white">
                <s.smallerP className="occasion-info-p">Any reason is a reason to have a piece of cake and that's where we come in! Place an order now so we can make your cake and cupcake dreams come true, even if it's for your sister's goldfish's funeral or a stupid ex!</s.smallerP>
                <Link to="/order"><s.pinkButton className="button" type="button" style={{margin: '0'}}>ORDER NOW</s.pinkButton></Link>
            </s.smallWhiteDiv>

            <s.occasionDiv className="occasion-div white">
                <s.occasionImg src={birthday} />
                <s.divInfo>
                    <s.H2>birthday parties</s.H2>
                    <s.smallerP>Since a love for baking arose from a high school bake sale, the art of cakes and cupcakes have been what I live for. I can't wait for you to experience some Cool AF Cakes!</s.smallerP>
                </s.divInfo>
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">             
                <s.occasionImg className="mobile" src={wedding} />   
                <s.divInfo>
                    <s.H2>weddings</s.H2>
                    <s.smallerP>Since a love for baking arose from a high school bake sale, the art of cakes and cupcakes have been what I live for. I can't wait for you to experience some Cool AF Cakes!</s.smallerP>
                </s.divInfo>
                <s.occasionImg className="not-mobile" src={wedding} />
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">
                <s.occasionImg src={workfunction} />
                <s.divInfo>
                    <s.H2>work fucntions &amp; other events</s.H2>
                    <s.smallerP>Since a love for baking arose from a high school bake sale, the art of cakes and cupcakes have been what I live for. I can't wait for you to experience some Cool AF Cakes!</s.smallerP>
                </s.divInfo>
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">     
                <s.occasionImg className="mobile" src={gender} />           
                <s.divInfo>
                    <s.H2>gender reveals</s.H2>
                    <s.smallerP>Since a love for baking arose from a high school bake sale, the art of cakes and cupcakes have been what I live for. I can't wait for you to experience some Cool AF Cakes!</s.smallerP>
                </s.divInfo>
                <s.occasionImg className="not-mobile" src={gender} />
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">
                <s.occasionImg src={tragedy} />
                <s.divInfo>
                    <s.H2>tragedies</s.H2>
                    <s.smallerP>Since a love for baking arose from a high school bake sale, the art of cakes and cupcakes have been what I live for. I can't wait for you to experience some Cool AF Cakes!</s.smallerP>
                </s.divInfo>
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">        
                <s.occasionImg className="mobile" src={fun} />        
                <s.divInfo>
                    <s.H2>just for fun</s.H2>
                    <s.smallerP>Since a love for baking arose from a high school bake sale, the art of cakes and cupcakes have been what I live for. I can't wait for you to experience some Cool AF Cakes!</s.smallerP>
                </s.divInfo>
                <s.occasionImg className="not-mobile" src={fun} />
            </s.occasionDiv>
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
                <NavLink className="nav-link" to="/products/cakes"><s.Li>Products</s.Li></NavLink>
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
                <NavLink className="nav-link" to="/products/cakes"><s.Li>Products</s.Li></NavLink>
                <NavLink className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></NavLink>
                <NavLink className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></NavLink>
                <NavLink className="nav-link" to="/about"><s.Li>Our Story</s.Li></NavLink>
                <NavLink activeClassName="selected" className="nav-link" to="/order"><s.Li>Order</s.Li></NavLink>
            </s.Ul>
        </s.Nav>
    </>        
    );
}