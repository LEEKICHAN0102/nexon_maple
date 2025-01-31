import { useQueries } from 'react-query';
import { getCash, getAndroid, getBeauty } from '@/api/api';
import { queryOptions } from "@/constants/queryOptions";

export const useCashQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['cashData', ocidState],
      queryFn: () => getCash(ocidState),
      ...queryOptions,
    },
    {
      queryKey: ['androidData', ocidState],
      queryFn: () => getAndroid(ocidState),
      ...queryOptions,
    },
    {
      queryKey: ['beautyData', ocidState],
      queryFn: () => getBeauty(ocidState),
      ...queryOptions,
    }
  ]);
};
