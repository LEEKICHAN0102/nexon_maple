import { useQuery } from "react-query";
import { getSkillInfo } from "@/api/skillApi";

export const useVQuery = (ocidState: string, character_skill_grade: number) => {
  return useQuery(["vData", ocidState], () => getSkillInfo(ocidState, character_skill_grade), {
    staleTime: 1000 * 60 * 5,
  });
};