import { useQuery } from "react-query";
import { getBeauty } from '@/api/api';

export const useBeautyQuery = (ocidState: string) => {
  return useQuery(["beautyData", ocidState], () => getBeauty(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};