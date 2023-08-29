import { MoonIcon } from "@chakra-ui/icons";
import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        <MoonIcon />
      </HStack>
    </>
  );
};

export default ToggleDarkMode;
