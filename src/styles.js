import styled from 'styled-components';
// import homeHeroImg from './img/homeBG.jpg';

export const pinkButton = styled.button`
    width: auto;
    height: 60px;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #CC84BD;
    color: #222;
    border: solid 5px #222;
    font-size: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;
`;

export const darkButton = styled.button`
    width: auto;
    height: 60px;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #222;
    color: #CC84BD;
    border: solid 5px #222;
    font-size: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;
`;

export const H1 = styled.h1`
    margin: 0;
    font-size: 80px;
    font-weight: bold;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 2px;
    color: #222;
`;

export const largerP = styled.p`
    margin: 0;
    font-size: 22px;
    font-family: sans-serif;
    color: #222;
`;

export const smallerP = styled.p`
    width: 500px;
    margin: 0;
    font-size: 18px;
    font-family: sans-serif;
    color: #222;
`;

export const H2 = styled.h2`
    margin: 0;
    font-size: 50px;
    font-weight: bold;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 2px;
    color: #222;
`;

export const Ul = styled.ul`
    width: 1000px;
    height: 110px;
    padding-left: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;    
`;

export const Li = styled.li`
    display: inline;
    font-size: 22px;
    font-family: sans-serif;
    color: #222;
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

export const divImg = styled.img`
    width: 1000px;
    height: 500px;    
    object-fit: cover;
    object-position: top;
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
        height: 550px;
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
    width: 600px;
    height: 260px;
    position: absolute;
    z-index: 1;
    bottom: 20%;
    left: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;      
`;

export const buttonDiv = styled.div` 
    width: 350px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;      
`;

export const whiteDiv = styled.div`
    width: 100%;
    height: 500px;    
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;      
`;

export const divInfo = styled.div`
    width: 500px;
    height: 235px;    
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;      
`;
