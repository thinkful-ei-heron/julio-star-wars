import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
  render() {
    return (
      <>
        <form onSubmit={(e) => this.props.getData(e)} className='main-form'>
          <input
            id='main-search'
            type='text'
            placeholder='Name or Title'
            required
          ></input>
          <select id='type-selector'>
            <option value='people'>People</option>
            <option value='films'>Films</option>
            <option value='starships'>Starships</option>
            <option value='vehicles'>Vehicles</option>
            <option value='species'>Species</option>
            <option value='planets'>Planets</option>
          </select>
          <button type='submit'>Search</button>
        </form>
      </>
    );
  }
}
export default SearchBar;
