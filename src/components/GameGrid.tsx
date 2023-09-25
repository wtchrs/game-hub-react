import {SimpleGrid, Text} from '@chakra-ui/react';
import useGames from '../hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardComponent from './GameCardComponent.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';

const GameGrid = () => {
  const {data, error, isLoading} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding="10px" spacing={10}>
        {isLoading
          && skeletons.map(skeleton =>
            <GameCardComponent>
              <GameCardSkeleton key={skeleton}/>
            </GameCardComponent>,
          )}
        {data.map(game =>
          <GameCardComponent>
            <GameCard key={game.id} game={game}/>
          </GameCardComponent>,
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
