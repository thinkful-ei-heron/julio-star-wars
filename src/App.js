import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

export class App extends Component {
  getData = (e) => {
    e.preventDefault();
    console.log('i run');
    const baseURL = 'https://swapi.co/api/';
    let params = `search=${document.getElementById('main-search').value}`;
    let type = document.getElementById('type-selector').value + '/?';
    console.log(baseURL + type + params);
    fetch(baseURL + type + params)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <>
        <SearchBar getData={this.getData} />
        <Results />
      </>
    );
  }
}

export default App;
