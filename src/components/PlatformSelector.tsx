import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import usePlatforms, {Platform} from '../hooks/usePlatforms.ts';

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({selectedPlatform, onSelectPlatform}: Props) => {
  const {data, error} = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)}>All</MenuItem>
        {data.map(platform =>
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>,
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
