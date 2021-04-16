import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { GlobalStyle } from '../../globarStyles';
import Navbar from '../Navbar';
import Loading from '../Products/Loading/Loading';
import { ProductButton, ProductCard, ProductDesc, ProductImg, ProductInfo, ProductPrice, ProductTitle } from '../Products/ProductsElements';
import Sidebar from '../Sidebar';

export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)
  const [isOpen, setIsOpen] = useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen);
   }


  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <section className='section cocktail-section'>

       <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <Sidebar  isOpen={isOpen} toggle= {toggle}/>
       <ProductCard key= {id}>
                            <ProductImg src={image} alt= {name}/>
                            <ProductInfo>
                                <ProductTitle> {name}</ProductTitle>
                                <ProductDesc>{category}</ProductDesc>  
                                <ProductDesc>{info}</ProductDesc>
                                <ProductDesc>{instructions}</ProductDesc>  
                                <ProductDesc>{ingredients}</ProductDesc>  


                                <Link to={`/cocktails/`}> <ProductButton>Back to the cocktails list </ProductButton></Link>                         
                            </ProductInfo>
                        </ProductCard>
      </section>
    )
  }
}