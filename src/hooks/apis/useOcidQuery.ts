import { useQuery } from "react-query";
import { getOcid } from "@/api/api";

export const useOcidQuery = (characterName: string) => {
  return useQuery(["ocidData", characterName], () => getOcid(characterName), {
    enabled: !!characterName,
  });
};