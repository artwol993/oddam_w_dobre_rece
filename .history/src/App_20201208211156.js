import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
aCoffee. We also add all of the brands in @fortawesome/free-brands-svg-icons to build the showcase of the big companies that fictitiously use “Coffee Checker” over time.


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
