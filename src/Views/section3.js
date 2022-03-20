import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";
import {
  Row,
  Container,
  Card,
  Navbar,
  NavbarBrand,
  NavbarText,
} from "reactstrap";
import "../Styles/app.css";
import { Formik, Field, Form } from "formik";

function Section3() {
  const navigate = useNavigate();
  const updateSection3 = useStore((state) => state.updateSection3);
  const data = useStore((state) => state.credentials);
  const sec1 = useStore((state) => state.section1);
  const sec2 = useStore((state) => state.section2);
  const sec3 = useStore((state) => state.section3);

  function sendMail(count) {
    console.log(data)
    fetch(
      "http://localhost:5000?to="+data.email+"&count="+count)
                  .then((res) => console.log(res.json()))
     console.log(count);
  }

  const calculateCount = () => {
    let somvar = 0;
    Object.keys(sec1).forEach((key, index) => {
      if (sec1[key] == (index % 4) + 1) {
        somvar++;
      }
    });
    Object.keys(sec2).forEach((key, index) => {
      if (sec2[key] == (index % 4) + 1) {
        somvar++;
      }
    });
    Object.keys(sec3).forEach((key, index) => {
      if (sec3[key] == (index % 4) + 1) {
        somvar++;
      }
    });
    return somvar;
  };

  return (
    <div>
      <Container>
        <Card style={{ padding: "20px" }}>
          <Navbar className="bg-ins" expand="md">
            <NavbarBrand style={{ color: "white" }}>
              Section 3: Coding Aptitude
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
                q5: ""
              }}
              onSubmit={async (values) => {
                updateSection3(values, "section3");
                var count = calculateCount();
                sendMail(count)
                navigate("/submit");
              }}
            >
              {({ values }) => (
                <Form>
                  <Row className="align-items">
                    1. We can insert pre written code in a C program by using
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q1" value="1" /> #read
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="2" /> #get
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="3" /> #include
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q1" value="4" /> #put
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    2. Break statement is used for
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q2" value="1" /> Quit a program
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="2" /> Quit the current iteration
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="3" /> Both 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q2" value="4" /> None of the above
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    3. What is the purpose of getc()
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q3" value="1" /> get input
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="2" /> get output
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="3" /> compile
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q3" value="4" /> run
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    4. Due to variable scope in c
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q4" value="1" /> Variables created in a function cannot be used 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="2" /> another function Variables created in a function can be used in another function 
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="3" /> Variables created in a function can only be used in the main function
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q4" value="4" /> None of above
                      </label>
                      <br />
                    </div>
                  </Row>
                  <hr />
                  <Row className="align-items">
                    5. Difference between structure and union is
                  </Row>
                  <Row>
                    <div>
                      <label>
                        <Field type="radio" name="q5" value="1" /> This is difference
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="2" /> May be this
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="3" /> That is the difference
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="q5" value="4" /> Both are same
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
                    Submit
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
export default Section3;
