import React from 'react'
import { TodoContext } from '../TodoContext';

import './TodoSearch.css'

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue);
    };

    return (
        <input 
            className='TodoSearch' 
            placeholder="Find TODO" 
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}

export { TodoSearch };