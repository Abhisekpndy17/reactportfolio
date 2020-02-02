import React from 'react'
import Styled from 'styled-components';
import BgImage from '../image/bgimg.png';



const MyAboutUs = Styled.div`

    display:flex;
    display:flex;
    flex-flow: column nowrap;
    width:100%;
    margin:0px auto;

    .myContact{
        border:px solid #000;
        width:100%;
        .about-heading{
            background: #195a79 no-repeat;
            background-size: cover;
            display:flex;
            align-items:center;
            justify-content:center;
            height:30vh;
            width:100%;
            h1{
                color:#fff;
                font-size:20vh;
                text-shadow:2px 2px 8p #fff;
                @media screen and (max-width:728px){
                    font-size:10vh;
                    font-weight:bold;
                }
          }
        }
        
    }
    
 
`
export default function About() {
    return (
        <MyAboutUs>
            <div className='myContact'>
                <div className='about-heading'><h1>About us</h1></div>
            </div>
            <div className='myContact'></div>
        </MyAboutUs>
    )
}
