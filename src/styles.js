import styled from 'styled-components';
import {Link} from 'react-router-dom'; 

export const pinkButton = styled.button`
    width: auto;
    height: 40px;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #CC84BD;
    color: #222;
    border: solid 3px #222;
    font-size: 17px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;

    @media (min-width: 600px) {
        height: 50px;
        padding: 10px 20px;  
        border: solid 4px #222;
        font-size: 18px;
    }

    @media (min-width: 1440px) {
        height: 60px;
        padding: 10px 20px;  
        border: solid 5px #222;
        font-size: 20px;
    }
`;

export const bigPinkButton = styled.button`
    width: auto;
    height: 40px;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #CC84BD;
    color: #222;
    border: solid 5px #CC84BD;
    font-size: 18px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;

    @media (min-width: 600px) {
        height: 50px;
        padding: 10px 20px;  
        font-size: 18px;
    }

    @media (min-width: 1440px) {
        height: 60px;
        padding: 10px 20px;  
        font-size: 20px;
    }
`;

export const darkButton = styled.button`
    width: auto;
    height: 40px;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #222;
    color: #CC84BD;
    border: solid 5px #222;
    font-size: 18px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;

    @media (min-width: 600px) {
        height: 50px;
        padding: 10px 20px;  
        font-size: 18px;
    }

    @media (min-width: 1440px) {
        height: 60px;
        padding: 10px 20px;  
        font-size: 20px;
    }
`;

export const H1 = styled.h1`
    margin: 0;
    font-size: 40px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 2px;
    color: #222;

    @media (min-width: 600px) {
        font-size: 60px;
    }

    @media (min-width: 1000px) {
        font-size: 70px;
    }
`;

export const H2 = styled.h2`
    margin: 0;
    font-size: 27px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 2px;
    color: #222;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 35px;  
        text-align: left; 
    }

    @media (min-width: 1000px) {
        font-size: 40px; 
    }

    @media (min-width: 1440px) {
        font-size: 45px;
    }
`;

export const H3 = styled.h2`
    margin: 0;
    font-size: 21px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 2px;
    color: #222;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 23px;  
    }

    @media (min-width: 1000px) {
        font-size: 25px; 
    }

    @media (min-width: 1440px) {
        font-size: 26px;
    }
`;

export const H4 = styled.h2`
    margin: 0;
    font-size: 18px;
    font-family: 'Segoe Print', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: lighter;
    color: #CC84BD;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 19px;  
    }

    @media (min-width: 1000px) {
        font-size: 21px; 
    }
`;

export const largerP = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Segoe Print', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;

    @media (min-width: 600px) {
        font-size: 19px;
    }

    @media (min-width: 1000px) {
        font-size: 20px;
    }

    @media (min-width: 1440px) {
        font-size: 22px;
    }
`;

export const smallerP = styled.p`
    width: 280px;
    margin: 0;
    font-size: 13px;
    font-family: 'Segoe Print', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;
    text-align:center;

    @media (min-width: 600px) {
        width: 300px;
        font-size: 16px;
        text-align: left;
    }

    @media (min-width: 1000px) {
        width: 400px;
    }

    @media (min-width: 1440px) {
        width: 450px;
        font-size: 17px;
    }
`;

export const Ul = styled.ul`
    width: 300px;
    height: 110px;
    padding: 10px 0px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;    

    @media (min-width: 600px) {
        width: 600px;
    }

    @media (min-width: 1000px) {
        width: 700px;
    }
`;

export const Li = styled.li`
    display: inline;
    font-size: 16px;
    font-family: 'Segoe Print', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;

    &:hover {
        color: #CC84BD; 
    }

    @media (min-width: 600px) {
        font-size: 19px;
    }

    @media (min-width: 1000px) {
        font-size: 20px;
    }

    @media (min-width: 1440px) {
        font-size: 22px;
    }
`;

export const Logo = styled.img`
    width: 110px;
    height: 110px;
`;

export const footerIcon = styled.img`
    width: 30px;
    height: 30px;

    @media (min-width: 600px) {
        width: 40px;
        height: 40px;
    }    

    @media (min-width: 1440px) {
        width: 45px;
        height: 45px;
    }
`;

export const divImg = styled.img`
    width: 300px;
    height: 200px;    
    object-fit: cover;
    object-position: top 0% left 45%;

    @media (min-width: 600px) {
        width: 385px;
        height: 500px;
    }

    @media (min-width: 1000px) {
        width: 550px;
    }

    @media (min-width: 1440px) {
        width: 1000px;
    }
`;

export const occasionImg = styled.img`
    width: 300px;
    height: 200px;    
    object-fit: cover;
    object-position: center;

    @media (min-width: 600px) {
        width: 400px;
        height: 270px;
    }

    @media (min-width: 1000px) {
        width: 550px;
    }

    @media (min-width: 1440px) {
        width: 680px;
        height: 350px;
    }
`;

export const aboutImg = styled.img`
    width: 250px;
    height: 150px;    
    object-fit: cover;
    object-position: center;

    @media (min-width: 600px) {
        width: 280px;
        height: 200px;
    }

    @media (min-width: 1440px) {
        width: 550px;
        height: 350px;
    }
`;

export const orderImg = styled.img`
    width: 300px;
    height: 200px;    
    object-fit: cover;
    object-position: center;

    @media (min-width: 600px) {
        width: 250px;
        height: 200px;
    }

    @media (min-width: 1440px) {
        width: 400px;
        height: 300px;
    }
`;

export const sideImg = styled.img`
    width: 100px;
    height: 140px;    
    object-fit: cover;
    object-position: bottom;

    @media (min-width: 600px) {
        width: 170px;
        height: 200px;
    }

    @media (min-width: 1000px) {
        
    }

    @media (min-width: 1440px) {
        width: 200px;
        height: 300px;
    }
`;

export const midImg = styled.img`
    width: 120px;
    height: 180px;    
    object-fit: cover;
    object-position: center;
    border: solid 3px #CC84BD;

    @media (min-width: 600px) {
        width: 180px;
        height: 240px;
        border: solid 5px #CC84BD;
    }

    @media (min-width: 1000px) {
        
    }

    @media (min-width: 1440px) {
        width: 300px;
        height: 400px;
    }
`;

export const HeroDivBig = styled.div`
    & {
        width: 100%;
        height: 100vh;
        position: relative;
        top: 0;
        margin: 0;       
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        background-color: #111;
        opacity: 0.1;
        width: 100%;
        height: 100%;
    }
`;

export const HeroDivSmall = styled.div`
    & {
        width: 100%;
        height: 280px;
        position: relative;
        top: 0;
        margin: 0;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        background-color: #fafafa;
        opacity: 0.25;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 600px) {
        height: 450px;
    }

    @media (min-width: 1000px) {
        
    }

    @media (min-width: 1440px) {
        height: 500px; 
    }
`;

export const Nav = styled.nav`
    width: 100%;
    margin: 0;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const divSubNav = styled.div`
    width: 100%;
    height: 40px;    
    background-color: #222;    
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        height: 45px;
    }

    @media (min-width: 1440px) {
        height: 50px;
    }
`;

export const homeHeroFlex = styled.div`
    width: auto;
    height: 200px;
    position: absolute;
    z-index: 1;
    bottom: 3%;
    left: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;     
    
    @media (min-width: 600px) {
        width: 400px;
        height: 270px;
        bottom: 50px;
        left: 70px;
    }

    @media (min-width: 1000px) {
        width: 500px;
        bottom: 60px;
        left: 80px;
    }

    @media (min-width: 1440px) {
        width: 600px;
        bottom: 130px;
        left: 150px;
    }
`;

export const heroTitleFlex = styled.div`
    width: 80%;
    height: 100px;
    padding-left: 50px;
    position: absolute;
    z-index: 1;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    @media (min-width: 600px) {
        width: 100%;
        padding-left: 0px;
        align-items: center;
        justify-content: center;
        bottom: 35%;        
    }

    @media (min-width: 1440px) {
        width: 400px;
        height: 100px;
        bottom: 40%;
        right: 300px;
    }
`;

export const buttonDiv = styled.div` 
    width: 280px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    
    @media (min-width: 600px) {
        width: 330px;
        height: 50px;
    }

    @media (min-width: 1440px) {
        width: 350px;
        height: 60px;
    }
`;

export const whiteDiv = styled.div`
    width: 100%;
    height: 500px;    
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;  
    
    @media (min-width: 600px) {
        height: 500px;
        flex-direction: row;
        justify-content: flex-start; 
    }
`;

export const divInfo = styled.div`
    width: 280px;
    height: 210px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;  
    
    @media (min-width: 600px) {
        width: 650px;
        height: 230px;    
        padding-left: 50px;
        align-items: flex-start;
    }

    @media (min-width: 1440px) {
        width: 650px;
        height: 230px;    
        padding-left: 90px;
    }
`;

export const darkDiv = styled.div`
    width: 100%;
    height: 430px;    
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;   

    @media (min-width: 600px) {
        height: 530px;
    }

    @media (min-width: 1440px) {
        height: 600px;
        flex-direction: row;
    }
`;

export const divInfoDark = styled.div`
    width: 100%;
    height: 150px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;     
    
    @media (min-width: 600px) {
        width: 500px;
        height: 200px;
    }

    @media (min-width: 1440px) {
        width: 550px;
        height: 210px;
        align-items:flex-start;
        justify-content: space-evenly;
    }
`;

export const divImages = styled.div`
    width: 100%;
    height: 190px;    
    display: flex;
    align-items: center;
    justify-content: center;      

    @media (min-width: 600px) {
        height: 250px;  
    }

    @media (min-width: 1440px) {
        width: 600px;
        height: 440px;  
    }
`;

export const reviewsDiv = styled.div`
    width: 100%;
    height: auto;   
    padding: 30px 0; 
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;   
`;

export const reviewInfoDark = styled.div`
    width: 100%;
    height: 80px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;     
`;

export const reviewsContainer = styled.div`
    width: 100%;
    height: 1100px;    
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;   

    @media (min-width: 600px) {
        height: 1250px;   
    }

    @media (min-width: 1440px) {
        width: 1000px;
        height: 450px;   
        flex-direction: row;
    }
`;

export const review = styled.div`
    width: 280px;
    height: 330px;   
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;   

    @media (min-width: 600px) {
        width: 330px;
        height: 380px;   
    }

    @media (min-width: 1440px) {
        width: 280px;
        height: 380px;  
    }
`;

export const reviewHeader = styled.div`
    width: 250px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const productsDiv = styled.div`
    width: 100%;
    height: 700px;
    padding-top: 30px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        flex-direction: row;
    }

    @media (min-width: 1440px) {
        
    }
`;

export const productsDivContent = styled.div`
    width: auto;
    height: 300px;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 

    @media (min-width: 1440px) {
        height: 380px;
        padding-right: 30px;
    }
`;

export const smallWhiteDiv = styled.div`
    width: 100%;
    height: 230px;    
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;    

    @media (min-width: 600px) {
        height: 260px;                 
        padding-bottom: 0; 
    }

    @media (min-width: 1440px) {
        height: 280px;      
    }
`;

export const occasionDiv = styled.div`
    width: 100%;
    height: 400px;    
    padding: 20px 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;   

    @media (min-width: 600px) {
        height: 450px;          
        padding: 30px 0;
    }    

    @media (min-width: 1440px) {
        width: 1440px;
        height: 350px;   
        margin: 0 auto;
        flex-direction: row;
    }
`;

export const backTopDiv = styled.a`
    width: 120px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
`;

export const toTopP = styled.p`
    margin: 0;
    font-size: 15px;
    font-family: 'Segoe Print', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;
    text-align:center;

    ${backTopDiv}:hover & {
        color: #CC84BD;
    }
`;

export const orderDiv = styled.div`
    width: 100%;
    height: 1200px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        height: 1050px;
        padding-top: 0;
        justify-content: space-evenly;
    }    

    @media (min-width: 1440px) {
        width: 1300px;
        height: 750px;
        margin: 0 auto;
        padding: 50px 0;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const contactDiv = styled.div`
    width: 600px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 600px) {
        height: 250px;
        flex-direction: row;
    }    

    @media (min-width: 1440px) {
        height: 630px;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export const contactDetails = styled.div`
    width: 300px;
    height: 220px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    @media (min-width: 600px) {
        width: 380px;
    }    

    @media (min-width: 1440px) {
        width: 400px;
        height: 300px;
    }
`;

export const contactItem = styled.div`
    width: 100%;
    display: flex;    
    align-items: flex-start;
    justify-content: space-evenly;
`;

export const Form = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 600px) {
        width: 600px;
    }    

    @media (min-width: 1440px) {
        width: 750px;
        padding-top: 50px;
    }
`;

export const flexImages = styled.div`
    width: 100%;
    height: 350px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 600px) {
        width: 600px;
        height: 200px;
        margin-top: 40px;
        flex-direction: row;
    }    

    @media (min-width: 1440px) {
        width: 1300px;
        height: 350px;
        margin-top: 50px;
    }
`;

export const aboutInfo = styled.div`
    width: 100%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 600px) {
        height: 230px;
    }    
`;

export const footerDiv = styled.div`
    width: 100%;
    height: 230px;
    background-color: #CC84BD;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 600px) {
        height: 260px;
    }    

    @media (min-width: 1000px) {
        height: 200px;
        justify-content: center;
    }  

    @media (min-width: 1440px) {
        height: 250px;
    }
`;

export const footerFlex = styled.div`
    width: 320px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 600px) {
        width: 500px;
    }    

    @media (min-width: 1000px) {
        width: 850px;
        height: 100px;
        align-items: flex-start;
    }   

    @media (min-width: 1440px) {
        width: 1100px;
        height: 120px;
    }
`;

export const footerNavs = styled.div`
    height: 92%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    @media (min-width: 1000px) {
        width: 500px;
        height: 100px;
        flex-direction: row;
        justify-content: space-between;
    }   

    @media (min-width: 1440px) {
        width: 550px;
    }
`;

export const subFooterNavs = styled.nav`
    padding-left: 5px;
    display: flex;
    flex-direction: column;
`;

export const footerSocials = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 1000px) {
        height: 90px;
        justify-content: space-between;
    } 
`;

export const socialIcons = styled.div`
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: space-evenly;
`;

export const footerCopy = styled.div`
    width: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        width: 260px;
    }

    @media (min-width: 1000px) {
        width: 280px;
    }

    @media (min-width: 1440px) {
        width: 300px;
    }
`;

export const Sidebar = styled.div`
    width: 240px;
    height: 80px;
    color: #222;
    position: absolute;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: flex-start;    

    @media (min-width: 600px) {
        width: 290px;
            padding-top: 10px;
    }
`;

export const NavIcon = styled.div`
    height: 60px;
    margin-left: 1.5rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 600px) {
        margin-left: 2rem;
    }
`;

export const SidebarNav = styled.nav`
    width: 240px;
    height: auto;
    padding: 10px 0 20px 0;
    background: #CC84BD; 
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 300ms;
    z-index: 10;

    @media (min-width: 600px) {
        width: 290px;
        padding: 18px 0 30px 0;
    }
`;

export const SidebarWrap = styled.div`
    width: 100%;
`;

export const SidebarLink = styled(Link)`
    width: 180px;
    height: 35px;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    color: #222;
    text-decoration: none;
    list-style: none;
    font-size: 14px;

    @media (min-width: 600px) {
        width: 200px;
        margin-left: 3rem;
        font-size: 16px;
    }
`;

export const SidebarLabel = styled.span`
    font-family: 'Segoe Print', Tahoma, Geneva, Verdana, sans-serif;
`;

export const DropdownLink = styled(Link)`
    margin-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #222;
    text-decoration: none;
    list-style: none;
    font-size: 16px;

    @media (min-width: 600px) {
        margin-left: 4rem;
        font-size: 16px;
    }
`;