import { useQuery } from "react-query";
import { getPet } from '@/api/api';

export const usePetQuery = (ocidState: string) => {
  return useQuery(["petData", ocidState], () => getPet(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};