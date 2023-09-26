import genres from '../data/genres.ts';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => ({data: genres, error: null, isLoading: false});

export default useGenres;