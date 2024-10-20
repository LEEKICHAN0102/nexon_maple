import { useQuery } from "react-query";
import { getHexaMatrixStat } from "@/api/api";

export const useHexaStatQuery = (ocidState: string) => {
  return useQuery(["hexaStatData", ocidState], () => getHexaMatrixStat(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};