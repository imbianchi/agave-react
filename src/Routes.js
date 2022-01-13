import { Route, Switch, Redirect, BrowserRouter, Router } from 'react-router-dom';

function Routes() {
  return(
    <Switch>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/register" component={Register} />
          <Route path="/rule" component={Rule} />
          <Route path="/single-product/:id" component={SingleProduct} />
          <Route path="/premioagave" component={Jurors} />
        </BrowserRouter>
      </Switch>
  )
}

export default Routes