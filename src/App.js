import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Pizzas from './Components/Pages/Pizzas'
import Home from './Components/Pages/Home';
import Desserts from './Components/Pages/Desserts';
import Footer from './Components/Footer';
import Error from './Components/Pages/Error';
import SinglePizza from "./Components/Pages/SinglePizza"
import Cocktails from "./Components/Pages/Cocktails"
import SingleCocktail from './Components/Pages/SingleCocktail'


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/pizzas" component={Pizzas}/>
          <Route path="/desserts" component={Desserts}/>
          <Route path="/cocktails" component={Cocktails}/>
          <Route path="/pizza/:id"><SinglePizza/></Route>
          <Route path="/cocktail/:id"><SingleCocktail/></Route>

          <Route path="*"><Error/></Route>

        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
