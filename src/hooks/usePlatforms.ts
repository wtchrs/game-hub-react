import useData from './useData.ts';

interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<ParentPlatform>('/platforms/lists/parents');

export default usePlatforms;