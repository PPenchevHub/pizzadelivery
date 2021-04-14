import React from 'react'
import Loading from '../Loading/Loading'
import { useGlobalContext} from '../../../context'
import { Link } from 'react-router-dom'
import {ProductsContainer, ProductWrapper,
        ProductTitle, ProductCard, ProductImg,ProductInfo,
        ProductPrice, ProductButton } from "../ProductsElements";

const CocktailList = () => {
    const {cocktails, loading} = useGlobalContext();
    if(loading){
        return <Loading/>
    }
    if(cocktails.length < 1){
      return  (<h2>no cocktails matched the search</h2>)

    }
    return (
        <section>
             <ProductsContainer>
            <ProductWrapper>
                {cocktails.map((product)=>{
                    return (
                        <ProductCard key= {product.id}>
                            <ProductImg src={product.image} alt= {product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductPrice>{product.info}</ProductPrice>
                                         <Link to={`/cocktail/${product.id}`}> <ProductButton>Details </ProductButton></Link>   
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
    </ProductsContainer>



        </section>
    )
}

export default CocktailList
