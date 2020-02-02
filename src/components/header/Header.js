import React, { Component } from 'react';
import DesktopNav from './DesktopNav';
import MoboNavBar from './MoboNavBar';
import Styled from 'styled-components';

const MyHeader = Styled.div`
    height:10vh;

   /* display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
*/
    `

export default class Header extends Component {
    state={
        openNav: false
    }

    componentDidMount=()=>{
        window.addEventListener('resize', this.checkAndHide)
    }

    componentWillMount=()=>{
        window.removeEventListener('resize', this.checkAndHide)
    }

    toggleClick =() =>{
        this.setState(prevState =>{
            return {openNav:!prevState.openNav}
        })
    }

    checkAndHide = () =>{
        const screenWidth = window.innerWidth;

        if(this.state.openNav && screenWidth > 728){
            this.setState({
                openNav:false
            })
        }
    }


    render() {
        return (
            <MyHeader>
                <DesktopNav toggleClick ={this.toggleClick}/>
                <MoboNavBar openNav={this.state.openNav}/>
            </MyHeader>
        )
    }
}
