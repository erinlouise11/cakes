import React, { useState } from "react";
import './App.css';
import Slider from 'react-slick';
import * as s from './styles';
import {Link, NavLink, Outlet} from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
import boxed from './img/divImages/boxed.jpg';
import lady1 from './img/divImages/lady1.jpg';
import lady2 from './img/divImages/lady2.jpg';
import dripcake from './img/divImages/dripcake.jpg';
import baking from './img/divImages/baking1.jpg';
import facebook from './img/facebook-icon.png';
import instagram from './img/insta-icon.png';
import twitter from './img/twitter-icon.png';

import cake1 from './img/cakes/cake1.jpg';
import cake2 from './img/cakes/cake2.jpg';
import cake3 from './img/cakes/cake3.jpg'
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

const HeaderNavs = () => {
    return (
        <s.Nav>
            <s.Ul>
                <NavLink activeClassName="selected" className="nav-link not-mobile-ipad" to="/products/cakes"><s.Li>Products</s.Li></NavLink>
                <NavLink activeClassName="selected" className="nav-link not-mobile-ipad" to="/occasions"><s.Li>Occasions</s.Li></NavLink>
                <NavLink className="nav-link" to="/"><s.Li><s.Logo src={logo} /></s.Li></NavLink>
                <NavLink activeClassName="selected" className="nav-link not-mobile-ipad" to="/about"><s.Li>Our Story</s.Li></NavLink>
                <NavLink activeClassName="selected" className="nav-link not-mobile-ipad" to="/order"><s.Li>Order</s.Li></NavLink>
            </s.Ul>
        </s.Nav>
    );
}

const Footer = () => {
    return (
        <s.footerDiv>
            <s.footerFlex>
                <s.footerNavs>
                    <Link className="main-footer-text footer-text footer-link nav-link" to="/">home</Link>
                    <div>
                        <Link className="nav-link" to="/products/cakes" className="main-footer-text footer-text footer-link nav-link">products</Link>
                        <s.subFooterNavs>
                            <Link className="sub-footer-text footer-text footer-link nav-link" to="/products/cakes" >Cakes</Link>
                            <Link className="sub-footer-text footer-text footer-link nav-link" to="/products/cupcakes">Cupcakes</Link>
                            <Link className="sub-footer-text footer-text footer-link nav-link" to="/products/packages">Packages</Link>
                        </s.subFooterNavs>                        
                    </div>
                    <Link className="main-footer-text footer-text footer-link nav-link" to="/occasions">occasions</Link>
                    <Link className="main-footer-text footer-text footer-link nav-link" to="/about">our story</Link>
                    <Link className="main-footer-text footer-text footer-link nav-link" to="/order">contact</Link>
                </s.footerNavs>
                <s.footerSocials>
                    <p className="main-footer-text footer-text">follow us on social media</p>
                    <s.socialIcons>        
                        <a href="#"><s.footerIcon src={instagram} /></a>  
                        <a href="#"><s.footerIcon src={facebook} /></a>                        
                        <a href="#"><s.footerIcon src={twitter} /></a>
                    </s.socialIcons>
                    <s.footerCopy className="mobile-ipad">
                        <p className="sub-footer-text footer-text">Copyright 2021 Cool AF Cakes</p>
                        <p className="sub-footer-text footer-text">Made with &hearts; by Erin Murphy</p>                
                    </s.footerCopy>
                </s.footerSocials>
            </s.footerFlex>
            <s.footerCopy className="not-mobile-ipad">
                <p className="sub-footer-text footer-text">Copyright 2021 Cool AF Cakes</p>
                <p className="sub-footer-text footer-text">Made with &hearts; by Erin Murphy</p>                
            </s.footerCopy>
        </s.footerDiv>
    );
}

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

const sidebarData = [
    {
        title: 'Home', 
        path: '/'
    },
    {
        title: 'Products', 
        path: '#', 
        iconClosed: <FaArrowDown style={{color: '#222'}} />,
        iconOpen: <FaArrowUp style={{color: '#222'}} />,
        subNav: [
            {
                title: 'Cakes', 
                path: '/products/cakes'
            }, 
            {
                title: 'Cupcakes', 
                path: '/products/cupcakes'
            }, 
            {
                title: 'Packages', 
                path: '/products/packages'
            }
        ]
    }, 
    {
        title: 'Occasions', 
        path: '/occasions'
    },
    {
        title: 'Our Story', 
        path: '/about'
    },
    {
        title: 'Contact Us', 
        path: '/order'
    },
]

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <s.SidebarLink to={item.path} onClick={item.subNav && showSubnav} activeClassName="burger-active">
                <s.SidebarLabel style={{fontWeight: 'bold'}}>{item.title}</s.SidebarLabel>
                <div>
                    {item.subNav && subnav ? item.iconOpen : item.subNav ? item.iconClosed : null}
                </div>
            </s.SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <s.DropdownLink to={item.path} key={index} activeClassName="burger-active">
                        <s.SidebarLabel>{item.title}</s.SidebarLabel>
                    </s.DropdownLink>                    
                )
            })}
        </>
    );
}

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

        return (
        <>
            <s.Sidebar className="mobile-ipad">
                <s.NavIcon to='#'>
                    <FaBars onClick={showSidebar} />
                </s.NavIcon>
            </s.Sidebar>
            <s.SidebarNav className="mobile-ipad" sidebar={sidebar}>
                <s.SidebarWrap>
                    <s.NavIcon to='#'>
                        <AiOutlineClose onClick={showSidebar} />
                    </s.NavIcon>
                    {sidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </s.SidebarWrap>
            </s.SidebarNav>
        </>
    );
}

export function Home() {
    return (
        <>
        <Sidebar />
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
            <HeaderNavs />

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
            
            <s.reviewsDiv className="reviews-div dark">
                <s.reviewInfoDark>
                    <s.H2 className="dark-h2 rewiew-h2">cool af clients</s.H2>
                    <s.smallerP className="dark-p review-p">What our clients have to say</s.smallerP>
                </s.reviewInfoDark>
                <s.reviewsContainer>
                    <s.review>
                        <s.reviewHeader>
                            <s.H3>Wanda Maximoff</s.H3>
                            <s.H4>birthday: package</s.H4>
                            <s.smallerP className="occasion-info-p review">01/03/2021</s.smallerP>
                        </s.reviewHeader>
                        <s.smallerP className="occasion-info-p review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi.</s.smallerP>
                    </s.review>
                    <s.review>
                        <s.reviewHeader>
                            <s.H3>Tony Stark</s.H3>
                            <s.H4>work event: cupcakes</s.H4>
                            <s.smallerP className="occasion-info-p review">11/11/2020</s.smallerP>
                        </s.reviewHeader>                        
                        <s.smallerP className="occasion-info-p review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Class aptent taciti sociosqu.</s.smallerP>
                    </s.review>
                    <s.review>
                        <s.reviewHeader>
                            <s.H3>Stephen Strange</s.H3>
                            <s.H4>work event: cupcakes</s.H4>
                            <s.smallerP className="occasion-info-p review">06/09/2020</s.smallerP>
                        </s.reviewHeader>                        
                        <s.smallerP className="occasion-info-p review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi.</s.smallerP>
                    </s.review>
                </s.reviewsContainer>
            </s.reviewsDiv>

            <Footer />
        </>       
    );
}

export function Products() {
    return (
        <>
            <Sidebar />
            <s.HeroDivSmall className="products-hero bg">
                <s.heroTitleFlex className="hero-intro-div">
                    <s.H1>products</s.H1>
                </s.heroTitleFlex>
            </s.HeroDivSmall> 
            <HeaderNavs />

            <s.divSubNav>
                <NavLink activeClassName="sub-selected" className="sub-nav-link" to="/products/cakes">cakes</NavLink>
                <NavLink activeClassName="sub-selected" className="sub-nav-link" to="/products/cupcakes">cupcakes</NavLink>
                <NavLink activeClassName="sub-selected" className="sub-nav-link" to="/products/packages">packages</NavLink>
            </s.divSubNav> 
            <Outlet />    

            <Footer />
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
            <Sidebar />
            <s.HeroDivSmall className="occasions-hero bg">
                <s.heroTitleFlex className="hero-intro-div">
                    <s.H1>occasions</s.H1>
                </s.heroTitleFlex>
            </s.HeroDivSmall> 
            <HeaderNavs />

            <s.smallWhiteDiv id="top" className="occasions-info white">
                <s.smallerP className="occasion-info-p">Any reason is a reason to have a piece of cake and that's where we come in! Place an order now so we can make your cake and cupcake dreams come true, even if it's for your sister's goldfish's funeral or a stupid ex!</s.smallerP>
                <Link to="/order"><s.pinkButton className="button" type="button" style={{margin: '0'}}>ORDER NOW</s.pinkButton></Link>
            </s.smallWhiteDiv>

            <s.occasionDiv className="occasion-div white">
                <s.occasionImg src={birthday} />
                <s.divInfo className="occasion-divInfo">
                    <s.H2>birthday parties</s.H2>
                    <s.smallerP className="occasion-info-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</s.smallerP>
                </s.divInfo>
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">             
                <s.occasionImg className="mobile" src={wedding} />   
                <s.divInfo className="occasion-divInfo">
                    <s.H2>weddings</s.H2>
                    <s.smallerP className="occasion-info-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue.</s.smallerP>
                </s.divInfo>
                <s.occasionImg className="not-mobile" src={wedding} />
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">
                <s.occasionImg src={workfunction} />
                <s.divInfo className="occasion-divInfo">
                    <s.H2>work fucntions &amp; other events</s.H2>
                    <s.smallerP className="occasion-info-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue. Maecenas fringilla arcu augue, sit amet egestas tellus vestibulum eu.</s.smallerP>
                </s.divInfo>
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">     
                <s.occasionImg className="mobile" src={gender} />           
                <s.divInfo className="occasion-divInfo">
                    <s.H2>gender reveals</s.H2>
                    <s.smallerP className="occasion-info-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat.</s.smallerP>
                </s.divInfo>
                <s.occasionImg className="not-mobile" src={gender} />
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">
                <s.occasionImg src={tragedy} />
                <s.divInfo className="occasion-divInfo">
                    <s.H2>tragedies</s.H2>
                    <s.smallerP className="occasion-info-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat.</s.smallerP>
                </s.divInfo>
            </s.occasionDiv>

            <s.occasionDiv className="occasion-div white">        
                <s.occasionImg className="mobile" src={fun} />        
                <s.divInfo className="occasion-divInfo">
                    <s.H2>just for fun</s.H2>
                    <s.smallerP className="occasion-info-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</s.smallerP>
                </s.divInfo>
                <s.occasionImg className="not-mobile" src={fun} />
            </s.occasionDiv>

            <s.backTopDiv className="back-top-a" href="#top">
                <div className="up-arrow">
                    <FaArrowUp />                
                </div>
                <s.toTopP>back to top</s.toTopP>
            </s.backTopDiv>

            <Footer />
        </>        
    );
}

export function About() {
    return (
        <>
            <Sidebar />
            <s.HeroDivSmall className="about-hero bg">
                <s.heroTitleFlex className="hero-intro-div">
                    <s.H1>our story</s.H1>
                </s.heroTitleFlex>
            </s.HeroDivSmall> 
            <HeaderNavs />

            <s.smallerP className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam neque lacus, ultrices sed aliquam nec, consectetur ac augue. Maecenas fringilla arcu augue, sit amet egestas tellus vestibulum eu.</s.smallerP>
            <s.flexImages className="about-image-flex">
                <s.aboutImg src={lady1} />
                <s.aboutImg src={lady2} />
            </s.flexImages>         
            <s.aboutInfo className="about-info-flex">
                <s.smallerP className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec pellentesque lectus, ac fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</s.smallerP>
                <Link to="/products/cakes"><s.pinkButton className="button" type="button" >SEE PRODUCTS</s.pinkButton></Link> 
            </s.aboutInfo>           
            <s.flexImages className="about-image-flex bottom-images">
                <s.aboutImg style={{objectPosition: 'bottom'}} src={dripcake} />
                <s.aboutImg src={baking} />
            </s.flexImages>

            <Footer />
        </>        
    );
}

export function Order() { 
    const axios = require('axios').default;
    const [data, setData] = useState({name: '', email: '', product: '', event: '', date: '', message: '', sent: false, buttonText: 'submit', err: ''});

    const handleChange = (e) => {
        const {name, value} = e.target
            setData({
                ...data,
                [name]: value
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();

        setData({
            ...data,
            buttonText: 'sending...'
        })

        axios.post('/api/sendmail', data)
        .then(res => {
            if(res.data.result !=='success') {
                setData({
                    ...data,
                    buttonText: 'failed to send',
                    sent: false,
                    err: 'fail'
                })
                setTimeout(() => {
                    resetForm()
                }, 6000)
            } else {
                setData({
                    ...data,
                    sent: true,
                    buttonText: 'sent',
                    err: 'success'
                })
                setTimeout(() => {
                    resetForm();
                }, 6000)
            }
        }).catch( (err) => {
            console.log(err.response.status)
            setData({
                ...data,
                buttonText: 'failed to send',
                err: 'fail'
            })
        })
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            product: '',
            event: '', 
            date: '',
            message: '',
            sent: false,
            buttonText: 'submit',
            err: ''
        });
    }

    return (
        <>
            <Sidebar />
            <s.HeroDivSmall className="order-hero bg">
                <s.heroTitleFlex className="hero-intro-div">
                    <s.H1>order now</s.H1>
                </s.heroTitleFlex>
            </s.HeroDivSmall> 
            <HeaderNavs />

            <s.orderDiv>
                <s.contactDiv>          
                    <s.orderImg className="not-ipad-desktop" src={boxed} />              
                    <s.contactDetails>                    
                        <s.contactItem>
                            <s.H2>contact</s.H2>
                            <s.smallerP className="order-smaller-p">(555) 420-6969</s.smallerP>
                        </s.contactItem>
                        <s.contactItem>
                            <s.H2>location</s.H2>
                            <s.smallerP className="order-smaller-p">Cool AF Cakes<br/>420 Sugar Street<br/>New York<br/>NY, 10696</s.smallerP>
                        </s.contactItem>
                    </s.contactDetails>
                    <s.orderImg className="ipad-desktop" src={boxed} />
                </s.contactDiv>

                <s.Form>
                    <s.divInfo style={{height: '150px', paddingLeft: 0, alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <s.H2>have an order idea?</s.H2>
                        <s.smallerP className="occasion-info-p">Send us a message and let's make your Cool AF Cakes dreams come true</s.smallerP>
                    </s.divInfo>
                    
                    <FormControl fullWidth={true}>
                        <TextField className="form-textfield form-field" required label="Full name" variant="filled" id="full-name" name="name" value={data.name} type="input" onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <TextField className="form-textfield form-field" required label="Email address" id="email" name="email" variant="filled" value={data.email} type="input" onChange={handleChange} />
                    </FormControl>
                    <FormControl required fullWidth={true} >
                        <InputLabel style={{padding: '0 10px'}} className="form-textfield form-field" id="product-label">Choose product type</InputLabel>
                        <Select className="form-textfield form-field" id="product" name="product" variant="filled" value={data.product} onChange={handleChange}>
                            <MenuItem value={'Cake'}>Cake</MenuItem>
                            <MenuItem value={'Cupcakes'}>Cupcakes</MenuItem>
                            <MenuItem value={'Package'}>Package</MenuItem>
                            <MenuItem value={'Unsure'}>Unsure</MenuItem>
                        </Select>                    
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <TextField className="form-textfield form-field" label="What's the occasion" id="event" name="event" variant="filled" value={data.event} type="input" onChange={handleChange} />
                    </FormControl>
                    <FormControl noValidate fullWidth={true}>
                        <TextField className="form-textfield form-field" label="Expected date" id="date" type="date" variant="filled" name="date" value={data.date} onChange={handleChange} InputLabelProps={{shrink: true}} />
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <TextField className="form-textfield form-field" required label="Message" variant="filled" name="message" multiline={true} rows="10" value={data.message} type="input" onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <div style={{padding: 20}}>
                            <Grid container spacing={2}>
                                <div className="form-submit">
                                    <s.pinkButton variant="contained" onClick={formSubmit}>{data.buttonText}</s.pinkButton>
                                </div>
                            </Grid>
                        </div>
                    </FormControl>
                </s.Form>                 
            </s.orderDiv>

            <Footer />
        </>        
    );
}