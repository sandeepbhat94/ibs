// SearchBox.js
import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Unlock Tailored Services: Your Needs, Instantly Found" />
            <button className="search-btn">
                <span className="arrow-icon">&uarr;</span>
            </button>
        </div>
    );
};

export default SearchBox;
