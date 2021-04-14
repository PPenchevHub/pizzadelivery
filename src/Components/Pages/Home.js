import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { GlobalStyle } from '../../globarStyles';
import Hero from '../Hero';
import Products from '../Products';
import {productData, productDataFeatured} from "../Products/data"
import Feature from '../Feature';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
      <GlobalStyle/>
      <Hero/>
      <Products heading = "Choose your favourite" data={productData}/>
      <Feature/>
      <Products heading = "new items" data={productDataFeatured}/>            
        </div>
    )
}

export default Home
