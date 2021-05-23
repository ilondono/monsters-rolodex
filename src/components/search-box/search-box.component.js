import React from 'react';

import './search-box.styles.css';

// destructuring the props object because we only are going to use the placeholder
//export const SearchBox = (props) => (
export const SearchBox = ({ placeholder, handleChange }) => (

     <input className="search"
            type='search' 
            placeholder= { placeholder } 
            onChange={handleChange}/>
)