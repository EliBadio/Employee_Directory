import React from 'react';

function SearchHeader(props) {
  return (
    <header className='h-center'>
      <h1>Employee Directory</h1>
      <form>
        <input
          type='text'
          name='search'
          placeholder='Search employee'
          value={props.search}
          onChange={props.handleInputChange}
          autoFocus
        />
      </form>
    </header>
  );
}

export default SearchHeader;
