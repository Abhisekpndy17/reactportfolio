import React, { Component } from 'react';
import Styled from 'styled-components';
import HeroImg from '../image/abhi1.png';
import HeroTwo from './hero/HeroSec';


const MyHeader = Styled.div`
    
    display:flex;
    flex-flow:row nowrap;
    width:90%;
    margin:10px auto;
    justify-content:space-evenly;
    height:80vh;

    @media screen and (max-width:728px){
        flex-flow:column nowrap;
        height:auto;
    }

    .hero{
        height:400px;
        width:50%;
        border:px solid black;
        @media screen and (max-width:728px){
            width:100%;
            height:auto;
    }
    span{
        color:#195a79;
    }
    }
    .hero-img{
        height:100%;
        width:100%;
    }
    .hero-img img{
        width:100%;
        height:100%;
    }

    .hero-second{
        
        height:200px;
        width:100%;
        display:flex;
        flex-flow:column nowrap;
        justify-content:center;
        align-items: center;
        @media screen and (max-width:728px){
            height:100px;
        }
    }

    
    `

export default class Header extends Component {
    render() {
        return (
            <MyHeader>
                <div className='hero'>
                    <div className='hero-img'>
                        <img alt='hero-image' src={HeroImg} />                    
                    </div>
                </div>
                <div className='hero'>
                    <div className='hero-second'>
                        <p>Hi I'm</p>
                        <h2>Abhishek <span>Pandey</span></h2>
                        <p>Web Developer</p>
                    </div>
                    <HeroTwo />
                </div>
            </MyHeader>
        )
    }
}

