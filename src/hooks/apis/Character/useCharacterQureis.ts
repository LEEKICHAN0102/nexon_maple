import { useQueries } from "react-query";
import { getCharacter, getUnion, getDojang, getPopularity } from "@/api/api";

export const useCharacterQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['characterData', ocidState],
      queryFn: () => getCharacter(ocidState),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['unionData', ocidState],
      queryFn: () => getUnion(ocidState),
    },
    {
      queryKey: ['dojangData', ocidState],
      queryFn: () => getDojang(ocidState),
    },
    {
      queryKey: ['popularityData', ocidState],
      queryFn: () => getPopularity(ocidState),
    },
  ]);
};
