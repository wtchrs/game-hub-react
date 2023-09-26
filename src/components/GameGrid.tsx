import {SimpleGrid, Text} from '@chakra-ui/react';
import {GameQuery} from '../App.tsx';
import useGames from '../hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardComponent from './GameCardComponent.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
  const {data, error, isLoading} = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" spacing={5}>
        {isLoading
          ? skeletons.map(skeleton =>
            <GameCardComponent key={skeleton}>
              <GameCardSkeleton/>
            </GameCardComponent>,
          )
          : data.map(game =>
            <GameCardComponent key={game.id}>
              <GameCard game={game}/>
            </GameCardComponent>,
          )
        }
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
