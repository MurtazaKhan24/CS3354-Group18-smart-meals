import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Ingredients from './pages/Ingredients'; // Example component for each page
import Nutrition from './pages/Nutrition';
import ShoppingList from './pages/ShoppingList';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;



