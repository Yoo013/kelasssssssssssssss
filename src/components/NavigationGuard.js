// src/components/NavigationGuard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const NavigationGuard = ({ children }) => {
  const navigate = useNavigate();
  const { username } = useAuth();

  useEffect(() => {
    if (!username) {
      navigate('/'); // Redirect to Page1 if username is not set
    }
  }, [username, navigate]);

  return username ? children : null;
};

export default NavigationGuard;
