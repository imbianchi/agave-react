
import AppContainer from './containers/appContainer';
import NavBar from './components/NavBar/NavBar.js'
import Home from './pages/Home/Home.js';
import Product from './pages/Product/Product.js'
import Register from './pages/Register';
import Rule from './pages/Rule';
import SingleProduct from './pages/SingleProduct/SingleProduct.js'
import Jurors from './pages/Jurors';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => {
  document.title = 'Premio Agave de Arquitetura';

  return (
    <AppContainer showText={window.location.pathname == '/'}>
      <NavBar />
      <Routes />
    </AppContainer>
  );
}

export default App;
