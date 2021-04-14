import React from 'react'
import Loading from '../Loading/Loading'
import {useGlobalContext} from '../../../context'
import { Link } from 'react-router-dom'
import {ProductsContainer, ProductWrapper,
        ProductTitle, ProductCard, ProductImg,ProductInfo,
        ProductPrice, ProductButton } from "../ProductsElements";

const PizzaList = () => {
    const {pizzas, loading} = useGlobalContext();
    if(loading){
        return <Loading/>
    }
    if(pizzas.length < 1){
      return  (<h2>no pizzas matched the search</h2>)

    }
    return (
        <section>
             <ProductsContainer>
            <ProductWrapper>
                {pizzas.map((product)=>{
                    return (
                        <ProductCard key= {product.id}>
                            <ProductImg src={product.image} alt= {product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductPrice>{product.info}</ProductPrice>
                               
                                         <Link to={`/pizza/${product.id}`}> <ProductButton>Details </ProductButton></Link>
                               
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
    </ProductsContainer>



        </section>
    )
}

export default PizzaList
