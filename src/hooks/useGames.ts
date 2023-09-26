import {GameQuery} from '../App.tsx';
import useData from './useData.ts';
import {Platform} from './usePlatforms.ts';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      },
    },
    [gameQuery]);
};

export default useGames;