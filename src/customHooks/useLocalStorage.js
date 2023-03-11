import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems = initialValue;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(parsedItems));
        } else {
          parsedItems = JSON.parse(localStorageItem);
        }

        saveItem(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const saveItem = (newTodos) => {
    try {
      const sItem = JSON.stringify(newTodos);
      localStorage.setItem(itemName, sItem);

      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }