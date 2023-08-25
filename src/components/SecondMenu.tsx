import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const accountOptions = [
  "Download",
  "Create a Copy",
  "Mark as Draft",
  "Delete",
  "Attend a Workshop",
];

const SecondMenu = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Grid
        templateAreas={`
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"250px 1fr"}
        gap={4}
        color="blackAlpha.700"
        fontWeight="bold"
        p={8}
        height="100%"
        width="100%">
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>

        <GridItem pl="2" area={"main"}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              My Account
            </MenuButton>

            <MenuList>
              {accountOptions.map((item, index) => (
                <MenuItem key={index}>{item}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </GridItem>

        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
};

export default SecondMenu;
