import React from 'react';
import styled from 'styled-components';

const MyContact = styled.div`
    
    

    .contact{
        background: #000;
        height:30vh;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        h1{
            font-size:20vh;
            color:#fff;
            @media screen and (max-width:728px){
                font-size:10vh;
            }
        }
    }

`

export default function Contact() {
    return (
        <MyContact>
            <div className='contact'>
                <h1>Contact us</h1>
            </div>
        </MyContact>
    )
}
