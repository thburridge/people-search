import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SecondMenu from "./SecondMenu";
import { SettingsIcon } from "@chakra-ui/icons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HStack
        h={"100%"}
        p={"2"}
        bgGradient="linear(to-r, gray.600, gray.500, pink.600)">
        <Button onClick={() => navigate("signup")}>Sign Up</Button>

        <Button ml={5} onClick={() => navigate("blog")}>
          Blog Post
        </Button>

        <Button onClick={() => navigate("/clients")}>Clients</Button>
        <SettingsIcon />
      </HStack>

      <div>
        <SecondMenu />
      </div>
    </>
  );
};

export default Home;
