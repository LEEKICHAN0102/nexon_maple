import { useQueries } from "react-query";
import { getCharacter, getUnion, getDojang, getPopularity } from "@/api/api";


export const useCharacterQueries = (ocidState: string) => {
  return useQueries([
    {
      queryKey: ['characterData', ocidState],
      queryFn: () => (ocidState ? getCharacter(ocidState) : Promise.resolve(null)),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['unionData', ocidState],
      queryFn: () => (ocidState ? getUnion(ocidState) : Promise.resolve(null)),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['dojangData', ocidState],
      queryFn: () => (ocidState ? getDojang(ocidState) : Promise.resolve(null)),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['popularityData', ocidState],
      queryFn: () => (ocidState ? getPopularity(ocidState) : Promise.resolve(null)),
      staleTime: 1000 * 60 * 5,
    },
  ]);
};
