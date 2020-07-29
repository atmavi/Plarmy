import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import './css/Style.css';

import Navbar from './components/Navs/Navbar';
import Footer from './components/Footer';

//PAGES
import Login from './components/Login';
import Landing from './pages/Landing';
import Products from './pages/Products';
import ViewProduct from './pages/ViewProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/products/:id/edit">
            <EditProduct />
          </Route>
          <Route path="/products/:id">
            <ViewProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
