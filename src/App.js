import './App.css';
import 'bulma/css/bulma.css'

import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { Component } from 'react';
import { MoviesList } from './components/MoviesLIst';

class App extends Component {
  state={ usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({results, usedSearch: true})
  }

  _renderResults(){
    return this.state.results.length === 0
    ? <p> Sorry!😢 <br/> Results not found!</p>
    : <MoviesList movies = {this.state.results} />
  }

  render(){
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults = {this._handleResults} />
        </div>
        {
          this.state.usedSearch
          ? this._renderResults()
          : <small> Use the form to search a movie</small>
        }
      </div>
    )
  }
}

export default App;