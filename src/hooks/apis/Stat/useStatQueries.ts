import { useQueries } from 'react-query';
import { getStat, getAbility, getHyperStat } from '@/api/api';

export const useStatQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['statData', ocidState],
      queryFn: () => (ocidState ? getStat(ocidState) : Promise.resolve(null)),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['abilityData', ocidState],
      queryFn: () => (ocidState ? getAbility(ocidState) : Promise.resolve(null)),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['hyperData', ocidState],
      queryFn: () => (ocidState ? getHyperStat(ocidState) : Promise.resolve(null)),
      staleTime: 1000 * 60 * 5,
    },
  ]);
};
