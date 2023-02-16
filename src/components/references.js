import React from "react";
import { Container, Card } from "react-bootstrap";
const References = ({ data }) => {
  return (
    <Container style={{fontSize: "1.2rem"}}>
      <h1 style={{ textDecoration: "underline" }}>References</h1>
      {data.map(({ name, description, email, phone }) => {
        return (
          <Card style={{marginTop:"20px", padding:"5px"}}>
            <Card.Title>{name}</Card.Title>
            <Card.Body>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{email}</Card.Text>
              <Card.Text>{phone}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default References;
