import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SecondMenu from "./SecondMenu";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Home</div>
      <Button onClick={() => navigate("signup")}>Sign Up</Button>
      <Button ml={5} onClick={() => navigate("blog")}>
        Blog Post
      </Button>

      <div>
        <SecondMenu />
      </div>
    </>
  );
};

export default Home;
