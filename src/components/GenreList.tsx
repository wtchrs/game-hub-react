import {Button, HStack, Image, List, ListItem, Spinner, Text} from '@chakra-ui/react';
import useGenres, {Genre} from '../hooks/useGenres.ts';
import getCroppedImageUrl from '../services/image-url.ts';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre | null) => void;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const {data, error, isLoading} = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner/>;

  return (
    <List>
      <Button variant="link" paddingY={1} onClick={() => onSelectGenre(null)}>
        <Text fontWeight={selectedGenre === null ? 'bold' : 'normal'} fontSize="lg">All</Text>
      </Button>
      {data.map(genre =>
        <ListItem key={genre.id} paddingY={1}>
          <Button variant="link" onClick={() => onSelectGenre(genre)}>
            <HStack>
              <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
              <Text fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize="lg">{genre.name}</Text>
            </HStack>
          </Button>
        </ListItem>,
      )}
    </List>
  );
};

export default GenreList;
