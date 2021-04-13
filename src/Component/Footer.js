import {Image, Center,Text } from "@chakra-ui/react";

import github from '../static/github.png'
function Footer() {
  return (
    <>
      <Center position="fixed" bottom="0" background="gray.500" p="3" w="100%" >
        <Text size="xs" textAlign="center" color="white" >
          ❤️ Swacblooms
          <Image src={github} ml="10" boxSize="7" />
        </Text>
      </Center>
    </>
  );
}

export default Footer;
