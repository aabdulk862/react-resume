import React from "react";
import { Container,Table } from "react-bootstrap";
const Skills = ({ data }) => {
  return (
    <Container style={{fontSize: "1.2rem"}}>
      <h1 style={{ textDecoration: "underline" }}>Skills</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Year(s) Of Experience</th>
          </tr>
        </thead>
        {data.map(({ skillname, yearsOfExperience }) => {
          return (
            <tbody>
              <tr>
                <td>{skillname}</td>
                <td>{yearsOfExperience}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};

export default Skills;
