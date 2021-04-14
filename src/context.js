import React, { useState, useContext, useEffect} from 'react';

const urlCocktail= "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const urlPizza = "https://jsonplaceholder.typicode.com/posts";
const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('gin')
    const [pizzas, setPizzas] = useState([])
    const [cocktails, setCocktails] = useState([])

    const fetchCocktails = async() =>{
      setLoading(true);
      try {
          const response = await fetch(`${urlCocktail}${searchTerm}`)
          const data = await response.json();
          console.log(data);
          const {drinks} = data;
          if(drinks){
              const newCocktail = drinks.map((item) =>{
                const {idDrink, strDrink, strDrinkThumb, strAlcholic, strGlass} = item;
                return {
                  id: idDrink,
                   name:strDrink, 
                   image:strDrinkThumb, 
                   info:strAlcholic, 
                   glass:strGlass}
              })
              setCocktails(newCocktail)
          }else{
            setCocktails([]);
          }
          setLoading(false);
      } catch (error) {
          console.log(error);
          setLoading(false);
      }
    }
     const fetchPizzas = async() =>{
      setLoading(true);
      try {
          const response = await fetch(`${urlPizza}`)
          const data = await response.json();
          console.log(data);
          const {drinks} = data;
          if(drinks){
              const newPizza = drinks.map((item) =>{
                const {userId, id,title,body} = item;
                return {
                  name: userId,
                   address:id,
                   ip_address:title,
                   company:body 
                
                }
              })
              setPizzas(newPizza)
          }else{
            setPizzas([]);
          }
          setLoading(false);
      } catch (error) {
          console.log(error);
          setLoading(false);
      }
    }

    useEffect(()=>{
      fetchPizzas()
      fetchCocktails()
    }, [searchTerm]);

  return (
    <div>
     <AppContext.Provider
      value={{
        loading, 
        searchTerm,
        pizzas,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
    </div>
  )
}
// make sure use

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }