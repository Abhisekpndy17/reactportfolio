import React from 'react';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';
import Navlinks from './Navlinks';


const MyDesktopNav = Styled.nav`
    width:100%;
    margin:0px auto;
    display:flex;
    flex-flow: row nowrap;
    justify-content:space-evenly;
    align-items:center;
    background:#195a79;
    height:10vh;

    .logo{
        
        font-size:5vh;
        text-transform:uppercase;
        font-weight:bold;
        
    }
    .nav-links{
        display:flex;
        flex-direction:row
        flex-flow: row nowrap;
        list-style:none;
        justify-content:space-around;
        width:35vw;
        align-items:center;
        @media screen and (max-width:728px){
            display:none;
        }
    }
    .nav-links li{
        text-transform:capitalize;
        color:white;
        font-size:2.5vh;
        list-style:none;
    }
    .hamburger{
        display:none;
        cursor: pointer;

        @media screen and (max-width:728px){
            display:block;
        }
        
    }
    .line{
        border-radius:20px;
        width:30px;
        height:4px;
        margin:4px;
        background: #fff;
    }
    .link{
        display:flex;
        justify-content:space-around;
        align-items:center;
        text-decoration:none;
        color:white;
        font-size:5vh;
        text-transform:uppercase;
        font-weight:bold;
        text-shadow:3px 3px 3px #000;
    }
    .link img{
        height:40px;
        width:40px;
    }




`



export default function DesktopNav(props) {
    return (
        <MyDesktopNav>
            <div className='logo'><Link className='link' to='/'>Logo</Link></div>
            <Navlinks />
            <div className='hamburger' onClick={props.toggleClick}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
        </MyDesktopNav>
    )
}
