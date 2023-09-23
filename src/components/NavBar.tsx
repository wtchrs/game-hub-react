import {HStack, Image} from '@chakra-ui/react';
import reactLogo from '../assets/react.svg';
import ColorModeSwitch from './ColorModeSwitch.tsx';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={reactLogo} boxSize="60px"/>
      <ColorModeSwitch/>
    </HStack>
  );
};
export default NavBar;
