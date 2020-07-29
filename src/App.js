import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/cart"><Cart /></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
