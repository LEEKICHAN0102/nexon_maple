import { useQuery } from "react-query";
import { getCash } from '@/api/api';

export const useCashQuery = (ocidState: string) => {
  return useQuery(["cashData", ocidState], () => getCash(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};