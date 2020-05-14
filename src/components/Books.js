import React, { Component } from 'react'

import './Books.css'

export default class Books extends Component {
    render() {
        const { imgUrl, titleBook, contentBook } = this.props
        return (
            <div className="card-book card m-2">
                <img src={imgUrl} className="card-img-top" alt="book"></img>
                <div className="card-body">
                    <h5 className="title-book card-title">{titleBook}</h5>
                    <p className="content-book card-text">{contentBook}</p>
                    <a href="/" className="btn btn-primary">View</a>
                </div>
            </div>
        )
    }
}
