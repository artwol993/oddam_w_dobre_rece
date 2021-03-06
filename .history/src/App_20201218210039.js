import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
// import ScrollToTop from './components/ScrollToTop';




function App() {
  return (
    <div className="body">
      <>
        <Router>
          {/* <ScrollToTop /> */}
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
