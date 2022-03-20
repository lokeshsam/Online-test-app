import React, {useState} from "react";
import { Row, Alert } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signupSchema } from "../Schema/schema";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";
import signup from "../images/signup.svg";


function Signup() {
  const navigate = useNavigate();
  const updateCredentials = useStore((state) => state.updateCredentials);
  const [visible, setVisible] = useState(false);
  let [message, setMessage] = useState("");
  let [color, setColor] = useState("");

  const alertBox = (message, color) => {
    setMessage(message);
    setColor(color);
    setVisible(true);
    window.setTimeout(() => {
      setVisible(false);
    }, 5000);
  };
  return (
    <div className="submit-page">
      <div style={{marginRight:"100px",}}>
      <img src={signup} style={{width:"500px"}} />
    </div>
      <div className="submit-page__container">
      <Alert color={color} isOpen={visible}>
          {message}
        </Alert>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            console.log(values);
            updateCredentials(values, "credentials");
            alertBox("E-mail registered successfully!", "success");
          }}
        >
          {({ values }) => (
            <Form>
              <Row className="signup">Signup</Row>
              <Row>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" />
              </Row>
              <br />
              <Row>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" />
              </Row>
              <br />
              <button
                type="submit"
                style={{ backgroundColor: "teal", color: "white" }}
                className="form-control"
              >
                Signup
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
