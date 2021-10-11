import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Questions from './pages/Questions';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/questions" component={Questions} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </>
  );
}

export default App;
