import React from "react";
import './App.css';
import * as s from './styles';
import {Link} from 'react-router-dom';
import logo from './img/logo.png';

export function Home() {
    return (
        <section>
            <s.HeroDivBig className="home-hero hero" /> 
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/cakes"><s.Li>Cakes</s.Li></Link>
                    <Link className="nav-link" to="/cupcakes"><s.Li>Cupcakes</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                    <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                    <Link className="nav-link" to="/contact"><s.Li>Contact</s.Li></Link>
                </s.Ul>
            </s.Nav>
        </section>        
    );
}

export function Cakes() {
    return (
        <section>
            <s.HeroDivSmall className="cake-hero hero" /> 
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/cakes"><s.Li>Cakes</s.Li></Link>
                    <Link className="nav-link" to="/cupcakes"><s.Li>Cupcakes</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                    <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                    <Link className="nav-link" to="/contact"><s.Li>Contact</s.Li></Link>
                </s.Ul>
            </s.Nav>
        </section>        
    );
}

export function Cupcakes() {
    return (
        <section>
            <s.HeroDivSmall className="cc-hero hero" /> 
            <s.Nav>
                <s.Ul>
                    <Link className="nav-link" to="/cakes"><s.Li>Cakes</s.Li></Link>
                    <Link className="nav-link" to="/cupcakes"><s.Li>Cupcakes</s.Li></Link>
                    <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                    <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                    <Link className="nav-link" to="/contact"><s.Li>Contact</s.Li></Link>
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
                <Link className="nav-link" to="/cakes"><s.Li>Cakes</s.Li></Link>
                <Link className="nav-link" to="/cupcakes"><s.Li>Cupcakes</s.Li></Link>
                <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                <Link className="nav-link" to="/contact"><s.Li>Contact</s.Li></Link>
            </s.Ul>
        </s.Nav>
    </section>        
    );
}

export function Contact() {
    return (
        <section>
        <s.HeroDivSmall className="contact-hero hero" /> 
        <s.Nav>
            <s.Ul>
                <Link className="nav-link" to="/cakes"><s.Li>Cakes</s.Li></Link>
                <Link className="nav-link" to="/cupcakes"><s.Li>Cupcakes</s.Li></Link>
                <Link className="nav-link" to="/"><s.Li><s.Img src={logo} /></s.Li></Link>
                <Link className="nav-link" to="/about"><s.Li>Our Story</s.Li></Link>
                <Link className="nav-link" to="/contact"><s.Li>Contact</s.Li></Link>
            </s.Ul>
        </s.Nav>
    </section>        
    );
}