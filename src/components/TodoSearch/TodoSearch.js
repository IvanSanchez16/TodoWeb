import React from 'react'

import './TodoSearch.css'

function TodoSearch({ loading, searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className='TodoSearch' 
            placeholder="Find TODO" 
            onChange={onSearchValueChange}
            value={searchValue}
            disabled={loading}
        />
    );
}

export { TodoSearch };