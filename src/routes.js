import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Designers from './pages/Designers';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Invite from './pages/Invite';
import Jurors from './pages/Jurors';
import Products from './pages/Products';
import Product from './pages/Product';
import Register from './pages/Register';
import Rule from './pages/Rule';



export default [
  {
    exact: true,
    path: '/categories',
    element: <Categories />,
    props: {},
  },
  {
    exact: true,
    path: '/contact',
    element: <Contact />,
    props: {},
  },
  {
    exact: true,
    path: '/designers',
    element: <Designers />,
    props: {},
  },
  {
    exact: true,
    path: '/faq',
    element: <Faq />,
    props: {},
  },
  {
    exact: true,
    path: '/',
    element: <Home />,
    props: {},
  },
  {
    exact: true,
    path: '/invite',
    element: <Invite />,
    props: {},
  },
  {
    exact: true,
    path: '/jurors',
    element: <Jurors />,
    props: {},
  },
  {
    exact: true,
    path: '/products',
    element: <Products />,
    props: {},
  },
  {
    exact: true,
    path: '/product/:id',
    element: <Product />,
    props: {},
  },
  {
    exact: true,
    path: '/register',
    element: <Register />,
    props: {},
  },
  {
    exact: true,
    path: '/rule',
    element: <Rule />,
    props: {},
  },


];