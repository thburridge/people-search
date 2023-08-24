import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Alert,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";

const SignupForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      password: "",
      mobile_email: "",
      dob: "",
      genre: "",
    },
    onSubmit: (values) => {
      setShowAlert(true);
      console.log(values);
    },
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Container>
        <Text fontSize={18} mb={4}>
          Create Account
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <FormControl maxW={340} position="relative">
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" id="name" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="lastname">Lastname</FormLabel>
              <Input type="text" id="lastname" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="password">Create your Password</FormLabel>
              <Input type="password" id="password" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="email">Mobile or Email address</FormLabel>
              <Input type="text" id="email" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel htmlFor="dob">Date of birth</FormLabel>
              <Input type="text" id="dob" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="genre">Genre</FormLabel>
              <Select id="genre" /*value={formik.values.genre} */>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </Select>
            </FormControl>

            <Button type="submit" mt={5}>
              Create Account
            </Button>
          </FormControl>
        </form>

        {showAlert && (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px">
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Application Submitted
            </AlertTitle>

            <AlertDescription maxWidth="sm">
              Thanks for submitting your application.
            </AlertDescription>
          </Alert>
        )}
      </Container>
    </Box>
  );
};

export default SignupForm;
