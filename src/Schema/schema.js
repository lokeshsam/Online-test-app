import * as Yup from "yup";

export const radioButtonSchema = Yup.object().shape({
  q1: Yup.string().required("Select atleast 1 option"),
  q2: Yup.string().required("Select atleast 1 option"),
  q3: Yup.string().required("Select atleast 1 option"),
  q4: Yup.string().required("Select atleast 1 option"),
  q5: Yup.string().required("Select atleast 1 option"),
});

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email should not be empty!"),
  password: Yup.string().required("Password should not be empty!"),
});
