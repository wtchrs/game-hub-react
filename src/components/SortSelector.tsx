import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({selectedSortOrder, onSelectSortOrder}: Props) => {
  const sortOrders = [
  {value: '', label: 'Relevance'},
  {value: '-added', label: 'Date added'},
  {value: 'name', label: 'Name'},
  {value: '-released', label: 'Release date'},
  {value: '-metacritic', label: 'Popularity'},
  {value: '-rating', label: 'Average rating'},
  ]

  const find = sortOrders.find(order => order.value === selectedSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {'Order by: ' + (find?.label || 'Relevance')}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order =>
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value}>{order.label}</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
