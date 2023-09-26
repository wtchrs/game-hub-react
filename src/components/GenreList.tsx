import {Button, HStack, Heading, Image, List, ListItem, Spinner, Text} from '@chakra-ui/react';
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
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List>
        <Button variant="link" paddingY={1} onClick={() => onSelectGenre(null)}>
          <Text fontWeight={selectedGenre ? 'normal' : 'bold'} fontSize="lg">All</Text>
        </Button>
        {data.map(genre =>
          <ListItem key={genre.id} paddingY={1}>
            <Button variant="link" onClick={() => onSelectGenre(genre)}>
              <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)}
                       boxSize="32px" borderRadius={8} objectFit="cover"/>
                <Text fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                      whiteSpace="normal" textAlign="left" fontSize="lg">
                  {genre.name}
                </Text>
              </HStack>
            </Button>
          </ListItem>,
        )}
      </List>
    </>
  );
};

export default GenreList;
