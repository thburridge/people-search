import { HStack } from "@chakra-ui/react";
import ToggleDarkMode from "../components/ToggleDarkMode";
import { useNavigate } from "react-router-dom";
import LogoImage from "../Logo/people-logo.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <HStack justifyContent="space-between" padding="10px">
      <p onClick={() => navigate("/")}>
        <img
          src={LogoImage}
          alt="Logo"
          width="80px"
          height="auto"
          style={{ cursor: "pointer", marginRight: "10px" }}
        />
      </p>
      <i className="fi fi-bs-home">icon to be updated...</i>
      <ToggleDarkMode />
    </HStack>
  );
};

export default NavBar;
