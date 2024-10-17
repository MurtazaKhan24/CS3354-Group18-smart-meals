import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login state
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Top right Sign In/Sign Out button */}
      <div className="flex justify-end">
        <button 
          onClick={handleAuth} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          {isLoggedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Smart Meal Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Input Ingredients */}
        <Link to="/ingredients" className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl">
          <img src="/path/to/ingredients-icon.png" alt="Ingredients" className="w-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Input Ingredients</h2>
          <p className="text-gray-500">Generate meal suggestions based on your ingredients</p>
        </Link>
        
        {/* Nutritional Info */}
        <Link to="/nutrition" className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl">
          <img src="/path/to/nutrition-icon.png" alt="Nutrition" className="w-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Nutritional Information</h2>
          <p className="text-gray-500">View detailed nutrition info for your meals</p>
        </Link>
        
        {/* Set Health Goals */}
        <Link to="/health-goals" className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl">
          <img src="/path/to/health-goal-icon.png" alt="Health Goals" className="w-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Set Health Goals</h2>
          <p className="text-gray-500">Track and manage your dietary goals</p>
        </Link>
        
        {/* Generate Shopping List */}
        <Link to="/shopping-list" className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl">
          <img src="/path/to/shopping-cart-icon.png" alt="Shopping List" className="w-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Generate Shopping List</h2>
          <p className="text-gray-500">Create a shopping list based on meals</p>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;




