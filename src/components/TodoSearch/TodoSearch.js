import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue);
    };

    return (
        <input 
            className='TodoSearch' 
            placeholder="Write your todo here" 
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}

export { TodoSearch };