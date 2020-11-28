import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/new" component={ProductForm} />
        <Route path="/product/:id" component={ProductForm} />
      </Switch>
    </BrowserRouter>
  );
}
