import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Results from './components/Results/Results';
import Header from './components/Header/Header';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      error: null,
    };
  }
  getData = (e) => {
    e.preventDefault();
    const baseURL = 'https://swapi.co/api/';
    let params = `search=${document.getElementById('main-search').value}`;
    let type = document.getElementById('type-selector').value + '/?';
    fetch(baseURL + type + params, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(this.setState({ loading: true }))
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => this.setState({ results: data.results, loading: false }))
      .catch((error) => this.setState({ error }));
  };
  render() {
    return (
      <>
        <Header />
        <SearchBar getData={this.getData} />
        {this.state.loading ? (
          <div class='lds-dual-ring'></div>
        ) : (
          <Results results={this.state.results} />
        )}
      </>
    );
  }
}

export default App;
