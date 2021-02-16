import React from "react";
import './App.css';
import * as s from './styles';
import {Link, NavLink, Outlet} from 'react-router-dom';

import logo from './img/logo.png';
import lady from './img/ladySmile.jpg';
import balloons from './img/balloons.jpg';
import cake from './img/cake.jpg';
import middle from './img/package.jpg';
import cupcakes from './img/rainbowCupcakes.jpg';


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

            <s.productsDiv>
                <Outlet />
            </s.productsDiv>        
        </>        
    );
}

export function Cakes() {
    return (
        <div>
            <p>cakes</p>
        </div>
    );
}

export function Cupcakes() {
    return (
        <div>
            <p>cupcakes</p>
        </div>
    );
}

export function Packages() {
    return (
        <div>
            <p>Packages</p>
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