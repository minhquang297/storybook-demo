import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  constructor () {
    super()
    this.inputElement = React.createRef()
  }
  componentDidMount () {
    this.inputElement.current.focus()
  }
  render() {
    return (
      <div className='App'>
        <input type='text' ref={this.inputElement}></input>   
      </div>
    )
  }
}
