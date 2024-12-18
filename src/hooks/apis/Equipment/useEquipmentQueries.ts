import { useQueries } from 'react-query';
import { getItemEquipment, getSymbol, getPet, getAndroid } from '@/api/api';

export const useEquipmentQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['equipData', ocidState],
      queryFn: () => getItemEquipment(ocidState),
    },
    {
      queryKey: ['androidData', ocidState],
      queryFn: () => getAndroid(ocidState),
    },
    {
      queryKey: ['symbolData', ocidState],
      queryFn: () => getSymbol(ocidState),
    },
    {
      queryKey: ['petData', ocidState],
      queryFn: () => getPet(ocidState),
    },
  ]);
};
