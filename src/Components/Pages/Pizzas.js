import React, { useState } from 'react'
import { GlobalStyle } from '../../globarStyles';
import Navbar from '../Navbar';
import PizzaList from '../Products/Pizzas/PizzaList';
import { ProductsContainer } from '../Products/ProductsElements';
import SearchForm from '../Products/SearchForm/SearchForm';
import Sidebar from '../Sidebar';



const Pizzas = () => {
   const [isOpen, setIsOpen] = useState(false);


    const toggle=()=>{
    setIsOpen(!isOpen);
   }

    return (
        <ProductsContainer>
        <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <Sidebar  isOpen={isOpen} toggle= {toggle}/>
        <SearchForm item="Pizza"/>
        <PizzaList/>
        </ProductsContainer>
    )
}

export default Pizzas
