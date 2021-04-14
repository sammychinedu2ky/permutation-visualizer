import { Heading, Flex, Stack, Image } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import logo from "../static/tree.png";
function Navigation() {
  return (
    <>
      <Flex
        position="fixed"
        background="gray.500"
        w="100%"
        h="20"
        p={4}
        top="0"
        color="white"
      >
        <Stack direction="row" spacing={4} width={["20%", "40%", "25%"]}>
          <Image src={logo} boxSize="10" />
          <Heading size="4md" visibility={["hidden", "visible"]}>
            Permutation <br /> Visualizer
          </Heading>
        </Stack>
        <SearchBar />
      </Flex>
    </>
  );
}

export default Navigation;
