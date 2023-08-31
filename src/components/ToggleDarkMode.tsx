import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [modeIcon, setModeIcon] = useState(<MoonIcon />);

  function handleClick() {
    setModeIcon(<SunIcon />);
  }

  //DARK MODE === ON? => icon= SunIcon : icon= MoonIcon

  return (
    <div onClick={handleClick}>
      <HStack>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        {modeIcon}
      </HStack>
    </div>
  );
};

export default ToggleDarkMode;
