import React from 'react'
import { GlobalStyle } from '../../globarStyles';
import Hero from '../Hero';
import PizzaList from '../Products/PizzaList';
import SearchForm from '../Products/SearchForm';



const Pizzas = () => {
    return (
        <main>
        <GlobalStyle/>
        <Hero/>

        <SearchForm/>
        <PizzaList/>


        </main>
    )
}

export default Pizzas
