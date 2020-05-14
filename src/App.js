import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {  Row, Col, Divider, Input } from 'antd'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

import Books from './components/Books'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      inputSearch: '',
      booksFind: []
    }
  }

  async getDataBooks() {
    try {
      const dataBooks = await axios.get('https://express-demo-heroku.herokuapp.com/api/books');
      this.setState({
        books: dataBooks.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  searchBooks (value) {
    const { books } = this.state
    const resultSearch = books.filter((book, index) => {
      return book.name.toLowerCase().includes(value.toLowerCase()) === true 
    })
    this.setState({
      inputSearch: value,
      booksFind: resultSearch
    })
  }

  componentDidMount() {
    return this.getDataBooks()
  }

  render() {
    const { books, inputSearch, booksFind } = this.state
    const { Search } = Input
    return (
      <div>
        <Container className='pt-4'>
          <Search
            placeholder="Tim kiem sach"
            onSearch={value => this.searchBooks(value)}
            style={{ width: 200 }}

          />
          <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>List Books</Divider>
          <Row gutter={[10, 24]} >
            {
              inputSearch === ''
                ? books.map((book, index) => {
                  return <Col className="gutter-row" key={index} sm={12} xs={24} md={8} lg={6}>
                    <Books titleBook={book.name} descriptionBook={book.description}></Books>
                  </Col>
                })
                : booksFind.map((book, index) => {
                  return <Col className="gutter-row" key={index} sm={12} xs={24} md={8} lg={6}>
                    <Books titleBook={book.name} descriptionBook={book.description}></Books>
                  </Col>
                })
            }
          </Row>
        </Container>
      </div>
    )
  }
}

