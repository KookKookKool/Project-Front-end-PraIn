// App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import OnSuccess from './Components/Success';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleShowSuccess = () => {
    setShowSidebar(false);
    setShowHeader(false);
    setShowFooter(false);
    setShowSuccess(true);
  };

  return (
    <Router>
      <div className="app">
        {showHeader && <Header />}
        <div className="content">
          {showSidebar && <Sidebar />}
        </div>
        {showFooter && <Footer />}
        {showSuccess && <OnSuccess handleShowSuccess={handleShowSuccess} />}
      </div>
    </Router>
  );
}

export default App;
