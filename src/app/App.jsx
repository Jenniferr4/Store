import React from 'react';
import {ProductDetails} from './ProductDetails'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
   <Router >
     <Switch>
       <Route path="/products/:productId" component={ProductDetails}></Route>
       <Route path="/" component={ProductDetails} ></Route>
     </Switch>
   </Router>
  );
}

export default App;
