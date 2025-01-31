import { getSkillInfo } from '@/api/skillApi';
import { useQueries } from 'react-query';
import { getLink, getHexaMatrixStat } from '@/api/api';


export const useSkillQueries = (ocidState: string, character_skill_grade_v: number, character_skill_grade_hexa: number) => {
  return useQueries([
    {
      queryKey: ['linkData', ocidState],
      queryFn: () => getLink(ocidState),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['vData', ocidState],
      queryFn: () => getSkillInfo(ocidState, character_skill_grade_v),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['hexaData', ocidState],
      queryFn: () => getSkillInfo(ocidState, character_skill_grade_hexa ),
      staleTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['hexaStatData', ocidState],
      queryFn: () => getHexaMatrixStat(ocidState),
      staleTime: 1000 * 60 * 5,
    },
  ]);
};
