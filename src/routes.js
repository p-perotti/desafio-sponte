import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/form" component={ProductForm} />
      </Switch>
    </BrowserRouter>
  );
}
