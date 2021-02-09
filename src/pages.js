import React from "react";
import './App.css';
import * as s from './styles';
import {Link} from 'react-router-dom';
import logo from './img/logo.png';
import lady from './img/ladySmile.jpg';

export function Home() {
    return (
        <section>
            <s.HeroDivBig className="home-hero bg">
                <s.homeHeroFlex className="hero-intro-div">
                    <s.H1>yummm...</s.H1>
                    <s.largerP>Our delicious products are hand crafted and home baked. Shipped with love all over the US.</s.largerP>
                    <s.buttonDiv className="button-container">
                        <s.pinkButton className="order-button">ORDER NOW</s.pinkButton>
                        <s.darkButton className="products-button">SEE PRODUCTS</s.darkButton>
                    </s.buttonDiv>                    
                </s.homeHeroFlex>
            </s.HeroDivBig>           
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                    <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></Link>
                    <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                    <Link className="nav-link" to="/order"><s.Li>Order</s.Li></Link>
                </s.Ul>
            </s.Nav>

            <s.whiteDiv className="bio-div white">
                <s.divImg src={lady} />
                <s.divInfo>
                    <s.H2>the short intro</s.H2>
                    <s.smallerP>Since a love for baking arose from a high school bake sale, the art of cakes and cupcakes have been what I live for. I can't wait for you to experience some Cool AF Cakes!</s.smallerP>
                    <s.darkButton>LEARN MORE</s.darkButton>
                </s.divInfo>
            </s.whiteDiv>

            <div className="products-div dark">

            </div>

            <s.whiteDiv className="occasions-div white">

            </s.whiteDiv>
            
            <div className="reviews-div dark">

            </div>
        </section>       
    );
}

export function Products() {
    return (
        <section>
            <s.HeroDivSmall className="products-hero bg" /> 
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                    <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></Link>
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
            <s.HeroDivSmall className="occasions-hero bg" /> 
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                    <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></Link>
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
        <s.HeroDivSmall className="about-hero bg" /> 
        <s.Nav>
            <s.Ul>
                <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                <Link className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></Link>
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
        <s.HeroDivSmall className="order-hero bg" /> 
        <s.Nav>
            <s.Ul>
                <Link className="nav-link" to="/products"><s.Li>Products</s.Li></Link>
                <Link className="nav-link" to="/occasions"><s.Li>Occasions</s.Li></Link>
                <Link className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></Link>
                <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                <Link className="nav-link" to="/order"><s.Li>Order</s.Li></Link>
            </s.Ul>
        </s.Nav>
    </section>        
    );
}