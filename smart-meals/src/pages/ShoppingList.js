import React, { useState } from 'react';

const ShoppingList = () => {
  // State to manage ingredients and their quantities
  const [ingredients, setIngredients] = useState([
    { name: 'Onions', quantity: 4, dateAdded: new Date('2024-10-01'), image: '/path/to/onion-image.png' },
    { name: 'Tomatoes', quantity: 2, dateAdded: new Date('2024-10-03'), image: '/path/to/tomato-image.png' },
    { name: 'Garlic', quantity: 1, dateAdded: new Date('2024-10-02'), image: '/path/to/garlic-image.png' },
    { name: 'Lettuce', quantity: 3, dateAdded: new Date('2024-10-04'), image: '/path/to/lettuce-image.png' },
    { name: 'Pasta', quantity: 1, dateAdded: new Date('2024-09-30'), image: '/path/to/pasta-image.png' },
    { name: 'Bananas', quantity: 3, dateAdded: new Date('2024-10-05'), image: '/path/to/banana-image.png' },
    { name: 'Apples', quantity: 3, dateAdded: new Date('2024-10-01'), image: '/path/to/apple-image.png' },
    { name: 'Tortillas', quantity: 7, dateAdded: new Date('2024-09-29'), image: '/path/to/tortilla-image.png' },
  ]);

  // State for sorting option
  const [sortOption, setSortOption] = useState('');

  // Function to handle quantity increase
  const increaseQuantity = (index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].quantity += 1;
    setIngredients(newIngredients);
  };

  // Function to handle quantity decrease
  const decreaseQuantity = (index) => {
    const newIngredients = [...ingredients];
    if (newIngredients[index].quantity > 1) {
      newIngredients[index].quantity -= 1;
      setIngredients(newIngredients);
    }
  };

  // Sorting functions
  const sortIngredients = (option) => {
    const sortedIngredients = [...ingredients];
    
    switch (option) {
      case 'alphabetical':
        sortedIngredients.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'reverseAlphabetical':
        sortedIngredients.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'quantity':
        sortedIngredients.sort((a, b) => a.quantity - b.quantity);
        break;
      case 'reverseQuantity':
        sortedIngredients.sort((a, b) => b.quantity - a.quantity);
        break;
      case 'dateAdded':
        sortedIngredients.sort((a, b) => a.dateAdded - b.dateAdded);
        break;
      case 'reverseDateAdded':
        sortedIngredients.sort((a, b) => b.dateAdded - a.dateAdded);
        break;
      default:
        break;
    }

    setIngredients(sortedIngredients);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping List</h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search ingredients"
          className="border border-gray-300 rounded-l-md p-2 w-96"
        />
        <button className="bg-black text-white px-4 py-2 rounded-r-md">
          <i className="fas fa-search"></i> {/* Add a search icon here */}
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          <option value="">Sort Ingredients</option>
          <option value="alphabetical">Sort Alphabetically (A-Z)</option>
          <option value="reverseAlphabetical">Sort Alphabetically (Z-A)</option>
          <option value="quantity">Sort by Quantity (Low-High)</option>
          <option value="reverseQuantity">Sort by Quantity (High-Low)</option>
          <option value="dateAdded">Sort by Date Added (Oldest-Newest)</option>
          <option value="reverseDateAdded">Sort by Date Added (Newest-Oldest)</option>
        </select>
        <button 
          onClick={() => sortIngredients(sortOption)} 
          className="bg-black text-white px-4 py-2 ml-4 rounded-md"
        >
          Apply Sort
        </button>
      </div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ingredients.map((ingredient, index) => (
          <div key={ingredient.name} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl">
            <img src={ingredient.image} alt={ingredient.name} className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{ingredient.name}</h2>
            
            <div className="flex justify-center items-center mt-4">
              {/* Decrease button */}
              <button
                onClick={() => decreaseQuantity(index)}
                className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center"
              >
                -
              </button>

              {/* Quantity display */}
              <span className="mx-4 text-xl">{ingredient.quantity}</span>

              {/* Increase button */}
              <button
                onClick={() => increaseQuantity(index)}
                className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Ingredients & View Meal Suggestions */}
      <div className="flex justify-center mt-8 space-x-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
          View All Ingredients
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
          View Meal Suggestions
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;



