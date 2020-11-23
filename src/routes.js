import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './pages/List';
import Form from './pages/Form';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}
