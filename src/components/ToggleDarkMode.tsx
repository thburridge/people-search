import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        <Text>Dark Mode</Text>
      </HStack>
    </>
  );
};

export default ToggleDarkMode;
