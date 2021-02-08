import React from "react";
import './App.css';
import * as s from './styles';
import {Link} from 'react-router-dom';
import logo from './img/logo.png';

export function Home() {
    return (
        <section>
            <s.HeroDivBig className="home-hero hero">
                <s.homeHeroFlex className="hero-intro-div">
                    <s.H1>yummm...</s.H1>
                    <s.largerP>Our delicious products are hand crafted and home baked. Shipped with love all over the US.</s.largerP>
                    <div className="button-container">
                        <button className="order-button">ORDER NOW</button>
                        <button className="products-button">SEE PRODUCTS</button>
                    </div>                    
                </s.homeHeroFlex>
            </s.HeroDivBig>           
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                    <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                    <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                    <Link className="nav-link" to="/order"><s.Li>Order</s.Li></Link>
                </s.Ul>
            </s.Nav>

            <div className="bio-div">

            </div>
            <div className="products-div">

            </div>
            <div className="occasions-div">

            </div>
            <div className="reviews-div">

            </div>
        </section>       
    );
}

export function Products() {
    return (
        <section>
            <s.HeroDivSmall className="products-hero hero" /> 
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                    <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                    <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                    <Link className="nav-link" to="/order"><s.Li>Order</s.Li></Link>
                </s.Ul>
            </s.Nav>
        </section>        
    );
}

export function Occasions() {
    return (
        <section>
            <s.HeroDivSmall className="occasions-hero hero" /> 
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                    <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                    <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                    <Link className="nav-link" to="/order"><s.Li>Order</s.Li></Link>
                </s.Ul>
            </s.Nav>
        </section>        
    );
}

export function About() {
    return (
        <section>
        <s.HeroDivSmall className="about-hero hero" /> 
        <s.Nav>
            <s.Ul>
                <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                <Link className="nav-link" to="/order"><s.Li>Order</s.Li></Link>
            </s.Ul>
        </s.Nav>
    </section>        
    );
}

export function Order() {
    return (
        <section>
        <s.HeroDivSmall className="order-hero hero" /> 
        <s.Nav>
            <s.Ul>
                <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                <Link className="nav-link" to="/order"><s.Li>Order</s.Li></Link>
            </s.Ul>
        </s.Nav>
    </section>        
    );
}