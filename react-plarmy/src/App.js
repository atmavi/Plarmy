import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import './css/Style.css';

import Navbar from './components/Navs/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import Login from './components/Login';

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
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
