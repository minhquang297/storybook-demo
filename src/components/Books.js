import React, { Component } from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    const { titleBook, descriptionBook } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Card
          hoverable
          loading={loading}
          cover={<img alt="example" src="https://placekitten.com/640/360" />}
        >
          <Meta
            className="mb-2"
            title={titleBook}
            description={descriptionBook}
          />
          <Button type="default" href="/">
            View
          </Button>
        </Card>
      </div>
    );
  }
}
