import {Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react';
import {Game} from '../hooks/useGames.ts';
import CriticScore from './CriticScore.tsx';
import PlatformIconList from './PlatformIconList.tsx';

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
