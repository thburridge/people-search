import { Alert, AlertIcon, AlertTitle, Button, VStack } from "@chakra-ui/react";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  return (
    <>
      <VStack>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Page not found</AlertTitle>
        </Alert>

        <Button onClick={() => navigate("/")}>HOME</Button>
      </VStack>
    </>
  );
};

export default ErrorPage;
