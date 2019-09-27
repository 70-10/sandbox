import React from "react";
import DefaultLayout from "../layouts/default";
import { Button, Container, Row, Col } from "react-bootstrap";

export default () => (
  <DefaultLayout>
    <Container>
      <Row>
        <Col>
          <h1>Hello World</h1>
        </Col>
        <Col>
          <Button variant="light">Button</Button>
        </Col>
      </Row>
    </Container>
  </DefaultLayout>
);
