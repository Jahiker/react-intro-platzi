import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Search TODO's" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};