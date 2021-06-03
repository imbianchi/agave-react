import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Invite from './pages/Invite';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/invite" component={Invite} />
    </Switch>
  );
}

export default App;
