import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  Navbar,
  NavbarBrand,
  NavbarText,
} from "reactstrap";
import "../Styles/app.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Card style={{ padding: "20px" }}>
          <Navbar className="bg-ins" expand="md">
            <NavbarBrand style={{ color: "white" }}>
              General Instructions
            </NavbarBrand>
            <NavbarText className="cursor" onClick={() => navigate("/")}>Signout</NavbarText>
          </Navbar>
          <hr/>
          <div className="align-ins">
            <Row className="align-items">
              1. The test comprises three sections.
              <br />
              <div style={{paddingLeft:'30px'}}>
              Section 1 : Verbal Aptitude
              <br />
              Section 2 : Numerical Ability
              <br />
              Section 3: Coding Aptitude
              </div>
            </Row>
            <Row className="align-items">
              2. You can attempt only one section at a time.
            </Row>
            <Row className="align-items">
              3. You cannot navigate to another section. If you choose the next
              section you cannot revisit this section again.
            </Row>
            <Row className="align-items">
              4. Each section contains 5 questions to be attempted.
            </Row>
            <Row className="align-items">
              5. The total duration of the exam will be 30mins.
            </Row>
            <Row className="align-items">
              6. 10 minutes for each section.
            </Row>
            <Row className="align-items">
              7. Once the time ends, you will be moved to next section automatically.
            </Row>
          </div>
          <hr />
          <Col style={{textAlign:"center"}}>
            <Button style={{backgroundColor:"teal"}} onClick={() => navigate("/sec1")}>
              Take Test
            </Button>
          </Col>
        </Card>
      </Container>
    </div>
  );
}
export default Home;
