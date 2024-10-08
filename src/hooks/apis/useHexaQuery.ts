import { useQuery } from "react-query";
import { getHexaMatrix } from "@/api/api";

export const useHexaQuery = (ocidState: string) => {
  return useQuery(["hexaData", ocidState], () => getHexaMatrix(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};