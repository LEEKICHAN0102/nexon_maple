import { useQuery } from "react-query";
import { getDojang } from '@/api/api';

export const useDojangQuery = (ocidState: string) => {
  return useQuery(["dojangData", ocidState], () => getDojang(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};