import { useQuery } from "react-query";
import { getOcid } from "@/api/api";

export const useOcidQuery = (characterName: string) => {
  return useQuery(["ocidData", characterName], () => getOcid(characterName), {
    staleTime: 1000 * 60 * 5,
    enabled: !!characterName,
  });
};