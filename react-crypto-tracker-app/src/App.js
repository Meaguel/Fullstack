import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/CryptoCards.css';

import CryptoDashboard from './components/CryptoDashboard';
import Navigation from './components/Navigation';
import Watchlist from './components/WarchList';

function App() {
  return (
    <>
      <Router>
             <Navigation />
             <Routes>
                <Route path="/" element={ <CryptoDashboard/> } />
                <Route path="/watchlist"  element={ <Watchlist />} />
                <Route path="*" element={<div>Not Found</div>} />
             </Routes>
      </Router>
      
    </>
  );
}

export default App;
