import React, { Component } from 'react'
import axios from 'axios'

import Books from './components/Books'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiBooks: [],
      valueInputSearch: '',
      statusUnSearch: true,
      resultSearch: []
    }
    this.onChangeInputSearch = this.onChangeInputSearch.bind(this)
    this.searchBook = this.searchBook.bind(this)
    this.searchBook = this.searchBook.bind(this)
  }

  async getApiBooks() {
    try {
      const response = await axios.get('https://express-demo-heroku.herokuapp.com/api/books');
      this.setState({
        apiBooks: this.state.apiBooks.concat(response.data)
      })
    } catch (error) {
      console.error(error);
    }
  }

  onChangeInputSearch(event) {
    this.setState({
      valueInputSearch: event.target.value
    })
  }

  searchBook() {
    let { apiBooks, valueInputSearch } = this.state
    if (valueInputSearch.length === 0) {
      return
    }
    this.setState({
      resultSearch: apiBooks.filter((book, index) => {
        let nameBook = book.name.toLowerCase()
        return nameBook.includes(valueInputSearch.toLowerCase()) === true
      }),
      statusUnSearch: false
    })
  }

  componentDidMount() {
    return this.getApiBooks()
  }

  render() {
    let { apiBooks, statusUnSearch, resultSearch } = this.state
    return (
      <div className='container mt-5'>
        <div className='d-flex mb-4'>
          <input className="px-2 mx-2" type="text" placeholder="Search"
            aria-label="Search" onChange={this.onChangeInputSearch}></input>
          <button className="btn btn-outline-success my-2 my-sm-0"
            onClick={this.searchBook}>Search</button>
        </div>
        <div className='row'>
          {
            statusUnSearch
              ? apiBooks.map((book, index) => {
                return <Books key={index} imgUrl='https://loremflickr.com/640/360'
                  titleBook={book.name} contentBook={book.description}></Books>
              })
              : resultSearch.map((book, index) => {
                return <Books key={index} imgUrl='https://loremflickr.com/640/360'
                  titleBook={book.name} contentBook={book.description}></Books>
              })
          }
        </div>
      </div>
    )
  }
}
