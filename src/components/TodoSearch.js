import React from "react";
import { TodoContext } from "../TodoContext";
import "../styles/TodoSearch.css";

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

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