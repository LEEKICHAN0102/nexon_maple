import { useQueries } from 'react-query';
import { getStat, getAbility, getHyperStat } from '@/api/api';

export const useStatQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['statData', ocidState],
      queryFn: () => getStat(ocidState),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['abilityData', ocidState],
      queryFn: () => getAbility(ocidState),
    },
    {
      queryKey: ['hyperData', ocidState],
      queryFn: () => getHyperStat(ocidState),
    },
  ]);
};
