// src/App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App2 from './App2';
import Page1 from './Page1';
import NavigationGuard from './components/NavigationGuard';
import { AuthProvider } from './AuthContext';
import './App.css'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route 
            path="/home" 
            element={
              <NavigationGuard>
                <App2 />
              </NavigationGuard>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
