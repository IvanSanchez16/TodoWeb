import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItems = initialValue;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(parsedItems));
    } else {
      parsedItems = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItems);

    const saveItem = (newTodos) => {
        const sItem = JSON.stringify(newTodos);
        localStorageItem.setItem(itemName, sItem);
    
        setItem(newTodos);
    }

    return [
        item, 
        saveItem
    ]
}

export { useLocalStorage }