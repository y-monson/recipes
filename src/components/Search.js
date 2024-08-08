import React from 'react';
import { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

const handleSubmit = (e) => {
    if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')){
        e.preventDefault();
        onSearch(searchTerm);
    }
    
};

return (
    <div className="search">
        <div className="search-container">
            <div className="search-input-wrapper">
                <input
                    type="text"
                    placeholder="Search recipes"
                    className="search-box"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSubmit}
                />
            <i className="fas fa-search search-icon" onClick={handleSubmit}></i>
            </div>
        </div>
    </div>
);

};

export default Search;
