import { useQuery } from "react-query";
import { getCharacter } from "@/api/api";

export const useCharacterQuery = (ocidState: string) => {
  return useQuery(["characterData", ocidState], () => getCharacter(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};