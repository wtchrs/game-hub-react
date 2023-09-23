import {HStack, Image, Text} from '@chakra-ui/react';
import reactLogo from '../assets/react.svg';

const NavBar = () => {
  return (
    <HStack>
      <Image src={reactLogo} boxSize="60px"/>
      <Text>NavBar</Text>
    </HStack>
  );
};
export default NavBar;
