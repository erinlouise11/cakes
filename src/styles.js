import styled from 'styled-components';

export const pinkButton = styled.button`
    width: auto;
    height: 40px;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #CC84BD;
    color: #222;
    border: solid 5px #222;
    font-size: 18px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;

    @media (min-width: 600px) {
        height: 60px;
        margin-top: 20px;
        padding: 10px 20px;  
        font-size: 20px;
    }
`;

export const bigPinkButton = styled.button`
    width: auto;
    height: 40px;
    margin-top: 20px;
    padding: 5px 10px;
    background-color: #CC84BD;
    color: #222;
    border: solid 5px #CC84BD;
    font-size: 18px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;

    @media (min-width: 600px) {
        height: 60px;
        margin-top: 20px;
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
        height: 60px;
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 20px;
    }
`;

export const H1 = styled.h1`
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 2px;
    color: #222;

    @media (min-width: 600px) {
        font-size: 60px;
    }

    @media (min-width: 1000px) {
        font-size: 80px;
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
        font-size: 22px;
    }
`;

export const smallerP = styled.p`
    width: 450px;
    margin: 0;
    font-size: 14px;
    font-family: 'Segoe Print', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;

    @media (min-width: 600px) {
        font-size: 16px;
    }

    @media (min-width: 1000px) {
        font-size: 17px;
    }
`;

export const H2 = styled.h2`
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 2px;
    color: #222;

    @media (min-width: 600px) {
        font-size: 35px;   
    }

    @media (min-width: 1000px) {
        font-size: 45px;
    }
`;

export const Ul = styled.ul`
    width: 300px;
    height: 110px;
    padding-left: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;    

    @media (min-width: 600px) {
        width: 500px;
        height: 110px;
    }

    @media (min-width: 1000px) {
        width: 900px;
        height: 110px;
    }
`;

export const Li = styled.li`
    display: inline;
    font-size: 16px;
    font-family: 'Segoe Print', Tahoma, Geneva, Verdana, sans-serif;
    color: #222;

    @media (min-width: 600px) {
        font-size: 19px;
    }

    @media (min-width: 1000px) {
        font-size: 22px;
    }
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

export const divImg = styled.img`
    width: 190px;
    height: 320px;    
    object-fit: cover;
    object-position: top;

    @media (min-width: 600px) {
        width: 385px;
        height: 500px;
    }

    @media (min-width: 1000px) {
        width: 1000px;
        height: 500px;
    }
`;

export const sideImg = styled.img`
    width: 110px;
    height: 140px;    
    object-fit: cover;
    object-position: bottom;

    @media (min-width: 600px) {
        width: 170px;
        height: 200px;
    }

    @media (min-width: 1000px) {
        width: 270px;
        height: 360px;
    }
`;

export const midImg = styled.img`
    width: 120px;
    height: 180px;    
    object-fit: cover;
    object-position: center;
    border: solid 5px #CC84BD;

    @media (min-width: 600px) {
        width: 180px;
        height: 240px;
    }

    @media (min-width: 1000px) {
        width: 340px;
        height: 440px;
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
        background-color: #fff;
        opacity: 0.1;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 600px) {
        height: 450px;
    }

    @media (min-width: 1000px) {
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
        height: 270px;
        bottom: 20%;
        left: 150px;
    }

    @media (min-width: 1000px) {
        height: 270px;
        bottom: 20%;
        left: 150px;
    }
`;

export const heroTitleFlex = styled.div`
    width: 200px;
    height: 100px;
    position: absolute;
    z-index: 1;
    bottom: 10%;
    right: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (min-width: 600px) {
        width: 400px;
        height: 100px;
        bottom: 40%;
        right: 300px;
    }

    @media (min-width: 1000px) {
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
        width: 350px;
        height: 60px;
    }

    @media (min-width: 1000px) {
        width: 350px;
        height: 60px;
    }
`;

export const whiteDiv = styled.div`
    width: 100%;
    height: 500px;    
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;  
    
    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        
    }
`;

export const divInfo = styled.div`
    width: 650px;
    height: 230px;    
    padding-left: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;  
    
    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        
    }
`;

export const darkDiv = styled.div`
    width: 100%;
    height: 600px;    
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: space-evenly;   

    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        
    }
`;

export const divInfoDark = styled.div`
    width: 550px;
    height: 210px;  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;     
    
    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        
    }
`;

export const divImages = styled.div`
    width: 870px;
    height: 440px;    
    display: flex;
    align-items: center;
    justify-content: center;      

    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        
    }
`;

export const divSubNav = styled.div`
    width: 100%;
    height: 50px;    
    background-color: #222;    
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        
    }
`;

export const productsDiv = styled.div`
    width: 100%;
    height: 700px;
    padding-top: 30px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        
    }
`;

export const productsDivContent = styled.div`
    width: auto;
    height: 450px;    
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;     

    @media (min-width: 600px) {
        
    }

    @media (min-width: 1000px) {
        
    }
`;
