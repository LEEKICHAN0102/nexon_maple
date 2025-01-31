import { useQueries } from 'react-query';
import { getItemEquipment, getSymbol, getPet, getAndroid } from '@/api/api';
import { queryOptions } from '@/constants/queryOptions';

export const useEquipmentQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['equipData', ocidState],
      queryFn: () => getItemEquipment(ocidState),
      ...queryOptions,
    },
    {
      queryKey: ['androidData', ocidState],
      queryFn: () => getAndroid(ocidState),
      ...queryOptions,
    },
    {
      queryKey: ['symbolData', ocidState],
      queryFn: () => getSymbol(ocidState),
      ...queryOptions,
    },
    {
      queryKey: ['petData', ocidState],
      queryFn: () => getPet(ocidState),
      ...queryOptions,
    },
  ]);
};
