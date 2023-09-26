import platforms from '../data/platforms.ts';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({data: platforms, error: '', isLoading: false});

export default usePlatforms;
