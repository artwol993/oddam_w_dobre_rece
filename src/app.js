import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/navbar';
import Home from './components/pages/Home/home';

function App() {
  return (
    <div className="body">
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
