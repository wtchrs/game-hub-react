import {Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react';
import {Game} from '../hooks/useGames.ts';
import getCroppedImageUrl from '../services/image-url.ts';
import CriticScore from './CriticScore.tsx';
import Emoji from './Emoji.tsx';
import PlatformIconList from './PlatformIconList.tsx';

interface Props {
  game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card className="game-card">
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top}/>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
