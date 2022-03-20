import React, { useState } from "react";
import { Alert, Row } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signupSchema } from "../Schema/schema";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";
import login from "../images/login.svg";


function Login() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  let [message, setMessage] = useState("");
  let [color, setColor] = useState("");
  const data = useStore((state) => state.credentials);

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
          onSubmit={async (values) => {
            console.log(data);
            if (
              values.email == data.email &&
              values.password == data.password
            ) {
              alertBox("Login success!", "success");
              navigate("/home")
            } else {
              alertBox("Invalid Username or Password!", "warning");
            }
          }}
        >
          {({ values }) => (
            <Form>
              <Row className="signup">Login</Row>
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
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div style={{marginLeft:"100px",}}>
      <img src={login} style={{width:"500px"}} />
    </div>
    </div>
  );
}

export default Login;
