import { Box } from "@chakra-ui/react";

const Clients = () => {
  const clients = ["joe", "mike", "jerry", "thomas"];

  return (
    <>
      List of Clients
      <Box>
        {clients.map((item) => (
          <li>{item}</li>
        ))}
      </Box>
    </>
  );
};

export default Clients;
