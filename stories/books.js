import React from "react";
import { storiesOf } from "@storybook/react";

import Books from "../src/components/Books";

import { Container } from 'react-bootstrap'
import { Row, Col, Divider, Input, Card, Button } from 'antd'
const { Meta } = Card;
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf("Book", module)
    .add("with text", () => (
        <Container>
            <Row gutter={[10, 24]} >
                <Col className="gutter-row" sm={12} xs={24} md={8} lg={6}>
                    <Books titleBook='title' descriptionBook='description'></Books>
                </Col>
            </Row>
        </Container>
    ))
