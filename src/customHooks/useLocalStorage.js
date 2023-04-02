import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const actionTypes = {
    error: 'ERROR',
    loading: 'LOADING',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE'
  };

  // Actions creators
  const onError = (error) => {dispatch({ type: actionTypes.error, payload: error })};
  const onSuccess = () => {dispatch({ type: actionTypes.success })};
  const onSave = (newItem) => {dispatch( {type: actionTypes.save, payload: newItem } )};
  const onSincronize = () => {dispatch({ type: actionTypes.sincronize })};

  const initialState = {
    sincronizedItem: true,
    error: false,
    loading: true,
    item: initialValue
  };

  const reducer = (state, action) => {
    switch(action.type) {
      case actionTypes.error:
        return {
          ...state,
          error: action.payload
        }
      case actionTypes.success: 
        return {
          ...state,
          error: false,
          loading: false,
          sincronizeItem: true
        }
      case actionTypes.save:
        return {
          ...state,
          item: action.payload
        }
      case actionTypes.sincronize:
        return {
          ...state,
          sincronizedItem: false,
          loading: true
        }
      default: return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { 
    sincronizedItem,
    error,
    loading,
    item
   } = state;

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
        onSuccess();
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newTodos) => {
    try {
      const sItem = JSON.stringify(newTodos);
      localStorage.setItem(itemName, sItem);

      onSave(newTodos);
    } catch (error) {
      onError(error);
    }
  }

  const sincronizeItem = () => {
    onSincronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  }
}

export { useLocalStorage }