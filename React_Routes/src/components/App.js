import React, { Component } from 'react';
import Guilty from './Guilty.js';
import Happy from './Happy.js';
import Sleepy from './Sleepy.js';
import Index from './Index';
//
// import './Style.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const Index = () => <h2>Home</h2>;
// const Happy = () => <h2>Happy</h2>;
// const Sleepy = () => <h2>Sleepy</h2>;
// const Guilty = () => <h2>Guilty</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Happy/">Happy</Link>
          </li>
          <li>
            <Link to="/Sleepy/">Sleepy</Link>
          </li>
          <li>
          <Link to="/Guilty">Guilty</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/Happy/" component={Happy} />
      <Route path="/Sleepy/" component={Sleepy} />
      <Route path="/Guilty/" component={Guilty} />

    </div>
  </Router>
);

export default AppRouter;
