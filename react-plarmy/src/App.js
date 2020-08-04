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
import Login from './components/Login';

//PAGES
import Landing from './pages/Landing';
import Products from './pages/Products';
import ViewProduct from './pages/ViewProduct';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import NotFound from './pages/NotFound';

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
          <Route exact path="/products/add">
            <AddProduct />
          </Route>
          <Route path="/products/:id">
            <ViewProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
