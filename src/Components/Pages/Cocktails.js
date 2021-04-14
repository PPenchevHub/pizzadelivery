import React, { useState } from 'react'
import { GlobalStyle } from '../../globarStyles';
import Navbar from '../Navbar';
import { ProductsContainer } from '../Products/ProductsElements';
import SearchForm from '../Products/SearchForm/SearchForm';
import Sidebar from '../Sidebar';
import CocktailList from '../Products/Cocktails/CocktailList';

const Cocktails = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle=()=>{
    setIsOpen(!isOpen);
   }

    return (
        <ProductsContainer>
        <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <Sidebar  isOpen={isOpen} toggle= {toggle}/>
        <SearchForm item="Cocktail"/>
        <CocktailList/>
        </ProductsContainer>
    )
}

export default Cocktails
