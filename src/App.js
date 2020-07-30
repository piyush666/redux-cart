import React from 'react';
import NavbarCart from './components/NavbarCart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { Container } from 'react-bootstrap';

function App() {
  return (

    <BrowserRouter>
      <Container className="mt-2">
        <NavbarCart />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/cart"><Cart /></Route>
        </Switch>
      </Container>
    </BrowserRouter>

  );
}

export default App;
