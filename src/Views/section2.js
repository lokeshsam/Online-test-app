import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";
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
import { Formik, Field, Form } from "formik";

function Section2() {
  const navigate = useNavigate();
  const updateSection2 = useStore((state) => state.updateSection2);
  return (
    <div>
      <Container>
        <Card style={{ padding: "20px" }}>
          <Navbar className="bg-ins" expand="md">
            <NavbarBrand style={{ color: "white" }}>
              Section 2: Numerical Ability
            </NavbarBrand>
            <NavbarText className="cursor" onClick={() => navigate("/")}>
              End Test
            </NavbarText>
          </Navbar>
          <hr />
          <div className="align-ins">
            <Formik
              initialValues={{
                q1: "",
                q2: "",
                q3: "",
                q4: "",
                q5: "",
              }}
              onSubmit={(values) => {
                updateSection2(values, "section2");
                navigate("/sec3");
              }}
            >
              {({ values }) => (
                <Form>
                  <Row className="align-items">
                    1. He was very tired as he is working since 6 O' clock in
                    the morning.
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q1" value="1" /> he was working 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="2" /> he had been working 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="3" /> he has been working 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="4" /> he will be working
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    2. She lived ____ the expectations.
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q2" value="1" /> as per 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="2" /> up to 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="3" /> on
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="4" /> at
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">3. Liquid: Liter</Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q3" value="1" /> Hot: Cold 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="2" /> Weight: Kilogram 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="3" /> Movie: Entertainment
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="4" /> Winter: Cold
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    4. ....... Indus River is the longest river in India.
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q4" value="1" /> The
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="2" />  An 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="3" /> A
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="4" /> None of the above
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    5. A person who travels on foot.
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q5" value="1" /> pedestrian
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="2" /> traveler
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="3" /> walker
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="4" /> health consious
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <button
                    type="submit"
                    className="form-control"
                    style={{ backgroundColor: "teal", color: "white" }}
                  >
                    Next
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Container>
    </div>
  );
}
export default Section2;
