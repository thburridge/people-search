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

const SignUp = () => {
  const toast = useToast();

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

        alert(JSON.stringify(values, null, 2));

        toast({
          title: "Your information has been submitted and is pending review.",
          description: "We've created your account for you.",
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
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!(touched.firstName && errors.firstName)}>
            <FormLabel htmlFor="firstName">Name</FormLabel>
            <Input
              className={errors.firstName ? "input-error" : ""}
              value={values.firstName}
              onChange={handleChange}
              id="firstName"
              type="text"
              name="firstName"
              onBlur={handleBlur}
            />
            {touched.firstName && errors.firstName && (
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            )}
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

          <FormLabel>Country</FormLabel>
          <Select
            id="country"
            name="country"
            placeholder="Select country"
            onChange={handleChange}
            value={values.country}>
            <option>Europe</option>
            <option>Asia</option>
            <option>North America</option>
            <option>Latin America</option>
          </Select>

          <HStack>
            <Checkbox
              id="isOver18"
              name="isOver18"
              onChange={handleChange}
              checked={values.isOver18}
            />
            <FormLabel>Are you over 18?</FormLabel>
          </HStack>

          <Button width="full" mt={"15px"} type="submit">
            Create Account
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
