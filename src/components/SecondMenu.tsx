import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
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
        "nav nav"
                  "side main"
                  "side footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"250px 1fr"}
        gap={4}
        color="blackAlpha.700"
        fontWeight="bold"
        p={8}
        height="100%"
        width="100%">
        <GridItem area={"nav"} color={"white"}>
          <HStack>
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
            <h2>This is the Navb Navb</h2>
          </HStack>
        </GridItem>

        <GridItem
          pl="2"
          bg="pink.300"
          area={"side"}
          bgGradient="linear(to-t, pink.700, pink.500)">
          side
        </GridItem>

        <GridItem pl="2" bg={"gray.400"} area={"main"}>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold">
            Landing Home Page
          </Text>
        </GridItem>

        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
};

export default SecondMenu;
