import styled, { css } from 'styled-components';
import homeHeroImg from './img/homeBG.jpg';

export const HeroDiv = styled.div`
    & {
        width: 100%;
        height: 100vh;
        position: relative;
        top: 0;
        margin: 0;
        background-color: black;
        background-image: url(${homeHeroImg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        background-color: #666;
        opacity: 0.4;
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
    font-size: 1.5rem;
    font-family: sans-serif;
    color: white;
`;

export const Img = styled.img`
    width: 100px;
    height: 100px;
`;