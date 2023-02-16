import React from "react";
import { Container, Card } from "react-bootstrap";
import Security from "../img/security.png";
function Contact({ data }) {
  return (
    <Container style={{ fontSize: "1.2rem" }}>
      <div className="App">
        <h1>Resume for {data.name}</h1>
        <Card style={{ marginTop: "20px", padding: "5px" }}>
          <h3>{data.role}</h3>
          <p>{data.address}</p>
          <p>{data.phone}</p>
          <p>
            <a
              href={data.linkedinId}
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              www.linkedin.com/in/adam-abdulkadir/
            </a>
          </p>
          <p>
            <a
              href={`mailto:${data.email}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              adama1862@outlook.com
            </a>
          </p>
          <p> &ensp;{data.roleDescription}</p>
          <img src={Security} alt="security+" style={{ width: "15%", padding: "10px"}}/>
        </Card>
      </div>
    </Container>
  );
}

export default Contact;
