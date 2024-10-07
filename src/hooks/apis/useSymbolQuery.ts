import { useQuery } from "react-query";
import { getSymbol } from "@/api/api";

export const useSymbolQuery = (ocidState: string) => {
  return useQuery(["symbolData", ocidState], () => getSymbol(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};