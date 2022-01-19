
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import AppContainer from './containers/appContainer';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import Rule from './pages/Rule';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => {
  document.title = 'Premio Agave de Arquitetura';

  return (
    <AppContainer showText={window.location.pathname === '/'}>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/products"> Products </Link>
        <Link to="/register"> Register </Link>
        <Link to="/rule"> Rules </Link>
        <Link to="/product/:id"> Product </Link>
      </div>
      <Switch>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/register" component={Register} />
          <Route path="/rule" component={Rule} />
          <Route path="/product/:id" component={Product} />
        </BrowserRouter>
      </Switch>
    </AppContainer>
  );
}

export default App;
