import { useQuery } from "react-query";
import { getSkillInfo } from "@/api/skillApi";

export const useHexaQuery = (ocidState: string, character_skill_grade: number) => {
  return useQuery(["hexaData", ocidState], () => getSkillInfo(ocidState, character_skill_grade), {
    staleTime: 1000 * 60 * 5,
  });
};