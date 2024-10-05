import { useQuery } from "react-query";
import { getAbility } from "@/api/api";

export const useAbilityQuery = (ocidState: string) => {
  return useQuery(["abilityData", ocidState], () => getAbility(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};