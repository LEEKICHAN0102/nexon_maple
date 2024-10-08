import { useQuery } from "react-query";
import { getVMatrix } from "@/api/api";

export const useVQuery = (ocidState: string) => {
  return useQuery(["vData", ocidState], () => getVMatrix(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};