import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Product from '../Pages/Pizzas'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink,SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
                <SidebarMenu>
                    <SidebarLink to="/pizzas">Pizzas</SidebarLink>
                    <SidebarLink to="/desserts">Desserts</SidebarLink>
                    <SidebarLink to="/all">Full Menu</SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/order">Order now</SidebarRoute>
                </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
