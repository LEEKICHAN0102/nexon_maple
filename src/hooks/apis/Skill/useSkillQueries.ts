import { getSkillInfo } from '@/api/skillApi';
import { useQueries } from 'react-query';
import { getLink, getHexaMatrixStat } from '@/api/api';
import { queryOptions } from '@/constants/queryOptions';

export const useSkillQueries = (ocidState: string, character_skill_grade_v: number, character_skill_grade_hexa: number) => {
  return useQueries([
    {
      queryKey: ['linkData', ocidState],
      queryFn: () => getLink(ocidState),
      ...queryOptions,
    },
    {
      queryKey: ['vData', ocidState],
      queryFn: () => getSkillInfo(ocidState, character_skill_grade_v),
      ...queryOptions,
    },
    {
      queryKey: ['hexaData', ocidState],
      queryFn: () => getSkillInfo(ocidState, character_skill_grade_hexa ),
      ...queryOptions,
    },
    {
      queryKey: ['hexaStatData', ocidState],
      queryFn: () => getHexaMatrixStat(ocidState),
      ...queryOptions,
    },
  ]);
};
