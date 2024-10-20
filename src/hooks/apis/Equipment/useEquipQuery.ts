import { useQuery } from "react-query";
import { getItemEquipment } from '@/api/api';

export const useEquipmentQuery = (ocidState: string) => {
  return useQuery(["equipData", ocidState], () => getItemEquipment(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};