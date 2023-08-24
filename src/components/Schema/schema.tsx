import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please type your email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, "Enter a stronger password")
    .required("A password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Password must match"),
});
