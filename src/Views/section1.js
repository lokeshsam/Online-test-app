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
import { Formik, Field, Form } from "formik";
import "../Styles/app.css";

function Section1() {
  const navigate = useNavigate();
  const updateSection1 = useStore((state) => state.updateSection1);

  return (
    <div>
      <Container>
        <Card style={{ padding: "20px" }}>
          <Navbar className="bg-ins" expand="md">
            <NavbarBrand style={{ color: "white" }}>
              Section 1: Verbal Aptitude
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
                updateSection1(values, "section1");
                navigate("/sec2");
              }}
            >
              {({ values }) => (
                <Form>
                  <Row className="align-items">
                    1. If a man sold a table for Rs. 450. Find the cost price if
                    he incurred a loss of 9%
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q1" value="1" /> Rs.550
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="2" /> Rs.450
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="3" /> Rs.650
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="4" /> Rs.350
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    2. A woman buys some pencils at the rate of 20 for Rs. 40
                    and sells them at 10 for Rs. 35. Calculate the loss or gain
                    percent.
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q2" value="1" /> 3%
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="2" /> 4%
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="3" /> 5%
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="4" /> 6%
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    3. A vendor sells his grocery by using weights that are 10%
                    less than the true weights this results in him making a
                    profit of 30%. Calculate the total gain percentage.
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q3" value="1" /> 15%
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="2" /> 20%
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="3" /> 25%
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="4" /> 30%
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    4. Shrawni borrowed an amount of Rs. 15000/- from Nitika at
                    the rate of 24 % SI for a time period of 6 years. Find the
                    total debt Shrawni has to repay.
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q4" value="1" /> Rs.10000
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="2" /> Rs.12000
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="3" /> Rs.14000
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="4" /> Rs.16000
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    5. How many different ways the letters ‘House’ can be
                    arranged?
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q5" value="1" /> 419
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="2" /> 220
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="3" /> 390
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="4" /> 490
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <button
                    type="submit"
                    style={{ backgroundColor: "teal", color: "white" }}
                    className="form-control"
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
export default Section1;
