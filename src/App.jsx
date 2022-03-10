import React, { useState } from 'react';
import './App.css';

function App() {

  const [menuData, setMenuData] = useState([
    {
      id: 1,
      name: 'Fancy fajita',
      inventory: 4,
    },
    {
      id: 2,
      name: 'Big burger',
      inventory: 10,
    },
    {
      id: 3,
      name: 'Tasty tilapia',
      inventory: 1,
    },
    {
      id: 4,
      name: 'Perfect pasta',
      inventory: 2,
    },
  ]);

  const removeItem = (id) => {
    const filterItem = menuData.find((x) => x.id === id);
    filterItem.inventory = filterItem.inventory - 1;
    const newMenuData = menuData.filter(x => x.id !== id);
    newMenuData.push(filterItem);
    setMenuData(newMenuData);
    console.log(menuData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu Data</h1>
        <p>
          Assignments (using React or another UI framework of your choice):
          1. Create a "menu" that displays each item name.
          2. When a user clicks on an item, decrease that item's inventory by 1.
          use splice()
          3. If an item runs out of inventory (reaches 0), don't display the item on the menu anymore.
        </p>
        {menuData.map((item, i) => {
          return (
            !item.inventory ? '' : <p onClick={() => removeItem(item.id)} key={i}>
              {item.name} - {item.inventory}
            </p>
          );
        })}
      </header>
    </div>
  );
}

export default App;
