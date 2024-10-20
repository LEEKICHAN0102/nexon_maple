import { useQuery } from "react-query";
import { getAndroid } from '@/api/api';

export const useAndroidQuery = (ocidState: string) => {
  return useQuery(["androidData", ocidState], () => getAndroid(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};