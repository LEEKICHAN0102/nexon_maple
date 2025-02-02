import { useQueries } from 'react-query';
import { getItemEquipment, getSymbol, getPet, getAndroid } from '@/api/api';


export const useEquipmentQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['equipData', ocidState],
      queryFn: () => getItemEquipment(ocidState),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['androidData', ocidState],
      queryFn: () => getAndroid(ocidState),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['symbolData', ocidState],
      queryFn: () => getSymbol(ocidState),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['petData', ocidState],
      queryFn: () => getPet(ocidState),
      staleTime: 1000 * 60 * 5,
    },
  ]);
};
