import { useQuery } from "react-query";
import { getHyperStat } from "@/api/api";

export const useHyperQuery = (ocidState: string) => {
  return useQuery(["hyperData", ocidState], () => getHyperStat(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};