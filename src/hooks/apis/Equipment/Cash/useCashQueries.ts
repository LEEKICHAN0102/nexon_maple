import { useQueries } from 'react-query';
import { getCash, getAndroid, getBeauty } from '@/api/api';

export const useCashQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['cashData', ocidState],
      queryFn: () => getCash(ocidState),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['androidData', ocidState],
      queryFn: () => getAndroid(ocidState),
    },
    {
      queryKey: ['beautyData', ocidState],
      queryFn: () => getBeauty(ocidState),
    }
  ]);
};
