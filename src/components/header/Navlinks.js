import React from 'react';
import {Link} from 'react-router-dom';
import ImgOne from '../image/home.png';
import ImgTwo from '../image/about.png';
import ImgThree from '../image/contact.png';

export default function Navlinks() {
    return (
        <div>
            <ul className='nav-links'>
                <Link className='link' to='/'>
                    <img alt='fhgh' src={ImgOne}></img>
                    <li>home </li>
                </Link>



                <Link className='link' to='/about'>
                    <img alt='kjhgfdsasdfg' src={ImgTwo}></img>
                    <li>about</li>
                </Link>


                <Link className='link' to='/contact'>
                    <img alt='kjhg' src={ImgThree}></img>
                    <li> contact</li>
                </Link>
            </ul>
        </div>
    )
}
