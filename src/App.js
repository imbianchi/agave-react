import { Route, Switch, Redirect } from 'react-router-dom';
import AppContainer from './containers/appContainer';
import Register from './pages/Register';
import Rule from './pages/Rule';
import Jurors from './pages/Jurors';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => {
  return (
    <AppContainer showText={window.location.pathname == '/'}>
      <Switch>
        <Route exact path="/" component={() => <Redirect to='/jurors' />}  />
        <Route path="/register" component={Register} />
        <Route path="/rule" component={Rule} />
        <Route path="/jurors" component={Jurors} />
      </Switch>

    </AppContainer>
  );
}

export default App;
