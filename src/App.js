import { Route, Switch, Redirect, BrowserRouter, Router } from 'react-router-dom';
import AppContainer from './containers/appContainer';
import Register from './pages/Register';
import Rule from './pages/Rule';
import Jurors from './pages/Jurors';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => {
  document.title = 'Premio Agave de Arquitetura';

  return (
    <AppContainer showText={window.location.pathname == '/'}>
      <Switch>
        <BrowserRouter>
          <Route exact path="/" component={() => <Redirect to='/premioagave' />} />
          <Route path="/premioagave/register" component={Register} />
          <Route path="/premioagave/rule" component={Rule} />
          <Route exact path="/premioagave" component={Jurors} />
        </BrowserRouter>
      </Switch>
    </AppContainer>
  );
}

export default App;
