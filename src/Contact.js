import { Container } from '@mui/material';
import React from 'react';
import Para from './Para';
import Example from './Example';
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Contact() {
  return (
    <div>
      <Example />
      <Container>
        <Para />
      </Container>

      <Row>
        <Col lg={4} md={12}>
          <Card>
            <Card.Body className="bg-body-tertiary">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12}>
          <Card>
            <Card.Body className="bg-body-tertiary">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12}>
          <Card>
            <Card.Body className="bg-body-tertiary">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
