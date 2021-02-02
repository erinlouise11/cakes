import React from "react";
import * as s from './styles';
import {Link} from "react-router-dom";

export function Home() {
    return (
        <section class="header-banner">
            <s.HeroDiv class="header-banner-hero" /> 
            <s.Nav class="header-banner-nav">
                <s.Ul class="nav-links">
                    <s.Li>Cakes</s.Li>
                    <s.Li>Cupcakes</s.Li>
                    {/*<s.Li><s.Img src={} /></s.Li>*/}
                    <s.Li>Our Story</s.Li>
                    <s.Li>Contact Us</s.Li>
                </s.Ul>
            </s.Nav>
        </section>        
    );
}

export function Cakes() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Cupcakes() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}