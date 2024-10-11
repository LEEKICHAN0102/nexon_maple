import { useQuery } from "react-query";
import { getUnion } from '@/api/api';

export const useUnionQuery = (ocidState: string) => {
  return useQuery(["unionData", ocidState], () => getUnion(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};