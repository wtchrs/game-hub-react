import {Heading} from '@chakra-ui/react';
import {GameQuery} from '../App.tsx';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`.trim();

  return (
    <Heading as="h1" marginBottom={5}>{heading}</Heading>
  );
};

export default GameHeading;
