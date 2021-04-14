import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Pizzas from './Components/Pages/Pizzas'
import Home from './Components/Pages/Home';
import Desserts from './Components/Pages/Desserts';
import AllProducts from './Components/Pages/AllProducts';
import Footer from './Components/Footer';
import Error from './Components/Pages/Error';



function App() {
  return (
    <Router>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/pizzas" component={Pizzas}/>
          <Route path="/desserts" component={Desserts}/>
          <Route path="/all" component={AllProducts}/>
          <Route path="*"><Error/></Route>

        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
