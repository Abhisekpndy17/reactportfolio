import React from 'react';
import Styled from 'styled-components';


const HeroApp = Styled.div`
      display:flex;
      flex-flow: row nowrap;
      justify-content:space-between;
      width:70%;
      margin:10px auto;
      align-items:center;
      @media screen and (max-width:728px){
        justify-content:space-around;
        width:100%;
        }

      .hero-two{
        box-shadow: 1px 1px 10px #000;
        height:100px;
        width:100px;
        border-radius:20px;
        @media screen and (max-width:728px){
          width:100px; 
        }
      }

`
export default function HeroSec() {
    return (
        <HeroApp>
          <div className='hero-two'>
          </div>
          <div className='hero-two'></div>
          <div className='hero-two'></div>  
        </HeroApp>
    )
}
