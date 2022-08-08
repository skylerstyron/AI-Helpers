import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='head'>
            <input 
                className='pa3 ma2 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Find your helper'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;