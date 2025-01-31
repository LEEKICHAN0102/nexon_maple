import { useQueries } from 'react-query';
import { getStat, getAbility, getHyperStat } from '@/api/api';
import { queryOptions } from '@/constants/queryOptions';

export const useStatQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['statData', ocidState],
      queryFn: () => (ocidState ? getStat(ocidState) : Promise.resolve(null)),
      ...queryOptions,
    },
    {
      queryKey: ['abilityData', ocidState],
      queryFn: () => (ocidState ? getAbility(ocidState) : Promise.resolve(null)),
      ...queryOptions,
    },
    {
      queryKey: ['hyperData', ocidState],
      queryFn: () => (ocidState ? getHyperStat(ocidState) : Promise.resolve(null)),
      ...queryOptions,
    },
  ]);
};
