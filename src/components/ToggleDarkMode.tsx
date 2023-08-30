import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </HStack>
    </>
  );
};

export default ToggleDarkMode;
