import React from 'react'
import Styled from 'styled-components';
import Navlinks from './Navlinks';

const MyNavlinks = Styled.nav`

    
    background: #195a79;
    border-radius: 0px 0px 20px 20px;
    width:100vw;
    clip-path:circle( ${props=> props.openNav ? ('1000px at 10% 10%') : ('10px at 10% -10%') });
    -webkit-clip-path:circle( ${props=> props.openNav ? ('1000px at 10% 10%') : ('10px at 10% -10%') });
    transition: all 1s ease-out;
    

     .nav-links{
        display:flex;
        flex-flow: column nowrap;
        list-style:none;
        justify-content:space-evenly;
        height: 80vh;
        align-items:center;
        
    }
    .nav-links li{
        border-radius:20px;
        
        padding:0px 40px;
        
        text-transform:capitalize;
        color:#fff;
        font-size:2.5vh;
        list-style:none;
    }
    .link{
        text-decoration:none;
        color:white;
        font-size:5vh;
        text-transform:uppercase;
        font-weight:bold;
        text-shadow:1px 1px 3px #000;
        display:flex;
        flex-flow: column nowrap;
        justify-content:space-around;
        align-items:center;
        height:15vh;
        box-shadow:1px 1px 7px #fff;
        
    }
    .link img{
        height:50px;
        width:50px;

    }


`
export default function MoboNavBar(props) {
    return (
        <MyNavlinks openNav = {props.openNav}>
            <Navlinks />
        </MyNavlinks>
    )
}
