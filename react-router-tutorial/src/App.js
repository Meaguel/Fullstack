import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* All your other JSX components go here */}
      <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <link to="/contact">Contact</link>
      </nav>
      <switch>
        
      </switch>
      </div>
      

    </Router>
    
  );
}

export default App;
