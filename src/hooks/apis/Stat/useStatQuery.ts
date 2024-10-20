import { useQuery } from "react-query";
import { getStat } from "@/api/api";

export const useStatQuery = (ocidState: string) => {
  return useQuery(["statData", ocidState], () => getStat(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};