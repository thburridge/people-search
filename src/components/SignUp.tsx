import {
  FormLabel,
  Input,
  Button,
  Box,
  FormControl,
  Checkbox,
  HStack,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useToast, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { basicSchema } from "./Schema/schema";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        isOver18: false,
      },
      validationSchema: basicSchema,
      onSubmit: (values, actions) => {
        actions.resetForm();
        navigate("/");

        alert(JSON.stringify(values, null, 2));

        toast({
          title: "Your information has been submitted and is pending review.",
          description: "We've created your account for you!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      },
    });

  console.log(errors);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh">
      <Box maxW={480} width="100%" p={4}>
        <Text fontSize="38px" fontWeight="bold" mb={6}>
          Sign Up
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <FormControl maxW={340} position="relative">
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>

          <FormControl isInvalid={!!(touched.lastName && errors.lastName)}>
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input
              className={errors.lastName ? "input-error" : ""}
              id="lastName"
              type="text"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName && (
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!(touched.email && errors.email)}>
            <FormLabel>Email address</FormLabel>
            <Input
              className={errors.email ? "input-error" : ""}
              id="email"
              type="email"
              placeholder="Type your email"
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!(touched.password && errors.password)}>
            <FormLabel>Password</FormLabel>
            <Input
              className={errors.password ? "input-error" : ""}
              id="password"
              type="password"
              placeholder="Enter a password"
              value={values.password}
              onChange={handleChange}
            />
            {touched.password && errors.password && (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            isInvalid={!!(touched.confirmPassword && errors.confirmPassword)}>
            <FormLabel>Confirm your password</FormLabel>
            <Input
              className={errors.confirmPassword ? "input-error" : ""}
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
            )}
          </FormControl>

            <FormControl>
              <FormLabel htmlFor="genre">Genre</FormLabel>
              <Select id="genre">
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </Select>
            </FormControl>

          <Button width="full" mt={"15px"} type="submit">
            Create Account
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
