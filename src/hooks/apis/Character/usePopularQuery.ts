import { useQuery } from "react-query";
import { getPopularity } from '@/api/api';

export const usePopularQuery = (ocidState: string) => {
  return useQuery(["popularData", ocidState], () => getPopularity(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};