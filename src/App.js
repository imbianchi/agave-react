
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => {
  document.title = 'Premio Agave de Arquitetura';

  return (
    <Routes>

      {/* <Navbar /> */}
      {
        routes.map((route) =>
          <>
            <Route
              exact={route.exact}
              path={route.path}
              element={route.element}
              {...route.props}
            />
          </>
        )
      }
    </Routes>
  );
}

export default App;
