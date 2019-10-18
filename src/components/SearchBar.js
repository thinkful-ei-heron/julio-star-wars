import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <>
        <form className='main-search-bar'>
          <input id='main-search' type='text' placeholder='Search Here' />
          <select id='type-selector'>
            <option value='people'>People</option>
            <option value='films'>Films</option>
            <option value='starships'>Starships</option>
            <option value='vehicles'>Vehicles</option>
            <option value='species'>Species</option>
            <option value='planets'>Planets</option>
          </select>
          <button
            htmlFor='main-search-bar'
            onClick={(e) => this.props.getData(e)}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default SearchBar;
