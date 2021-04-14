import { Text, Center } from "@chakra-ui/react";
import { useContext } from "react";
import { appContext } from "../App";
function Navigation() {
  const context = useContext(appContext);
  return (
    <>
      <Center position="fixed" bottom="20" p="3" w="100%">
        <Text size="xs" textAlign="center" color="gray.500">
          Possible Arrangements: {context.state.possible}
        </Text>
      </Center>
    </>
  );
}

export default Navigation;
