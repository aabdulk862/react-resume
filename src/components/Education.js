import React from "react";
import { Container, Card } from "react-bootstrap";
const Education = ({ data }) => {
  return (
    <Container style={{fontSize: "1.2rem"}}>
      <h1 style={{textDecoration: "underline"}}>Education</h1>
      {data.map(
        ({
          schoolName,
          specialization,
          monthOfPassing,
          yearOfPassing,
          achievements,
        }) => {
          return (
            <Card style={{marginTop:"20px", padding:"5px"}}>
              <Card.Header>{schoolName}</Card.Header>
              <Card.Body>
                <Card.Title>{specialization}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{monthOfPassing} {yearOfPassing}</Card.Subtitle>
                <Card.Text>&emsp;{achievements}</Card.Text>
              </Card.Body>
            </Card>
          );
        }
      )}
    </Container>
  );
};

export default Education;
