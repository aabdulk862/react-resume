import React from "react";
import { Container, Card } from "react-bootstrap";

const Employment = ({ data }) => {
  return (
    <Container style={{fontSize: "1.2rem"}}>
     <h1 style={{textDecoration: "underline"}}>Employment</h1>
      {data.map(
        ({
          companyName,
          role,
          summary,
          monthOfStarting,
          yearOfStarting,
          monthOfLeaving,
          yearOfLeaving,
          achievements,
          presentEmployer,
        }) => {
          return(
              <Card style={{ width: "80%", marginTop:"20px", marginBottom:"20px", padding:"5px"}}>
              <Card.Body>
                <b>{companyName}</b>
                <Card.Title>{role} </Card.Title>
                <Card.Subtitle>{monthOfStarting} {yearOfStarting} - {monthOfLeaving} {yearOfLeaving}</Card.Subtitle>
                <Card.Text style={{paddingTop:"5px"}}>
                  <div>&emsp;{summary}</div>
                  <div>{achievements}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        }
      )}
    </Container>
  );
};

export default Employment;
