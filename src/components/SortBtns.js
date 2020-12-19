import React from 'react';

function SortBtns(props) {
  return (
    <div className='sort-btns'>
      <button className='btn' onClick={props.handleSortByName}>
        Sort by First Name
      </button>
      <button className='btn' onClick={props.handleSortByCountry}>
        Sort by Country
      </button>
    </div>
  );
}

export default SortBtns;
