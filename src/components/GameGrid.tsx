import {SimpleGrid, Text} from '@chakra-ui/react';
import useGames from '../hooks/useGames.ts';
import GameCard from './GameCard.tsx';
import GameCardComponent from './GameCardComponent.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import {Genre} from '../hooks/useGenres.ts';
import {Platform} from '../hooks/usePlatforms.ts';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding="10px" spacing={3}>
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
