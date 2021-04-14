import {Image, Center,Text } from "@chakra-ui/react";

import github from '../static/github.png'
function Footer() {
  return (
    <>
      <Center position="fixed" bottom="0" background="gray.500" p="3" w="100%" >
        <Text as="a" href="https://github.com/sammychinedu2ky/permutation-visualizer" target="_blank" size="xs" textAlign="center" color="white" >
          ❤️ Swacblooms
          <Image src={github} ml="10" boxSize="7" />
        </Text>
      </Center>
    </>
  );
}

export default Footer;
