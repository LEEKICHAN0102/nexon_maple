export interface UnionProps {
  date?: string;
  union_level: number
  union_grade: string;
  union_artifact_level: number;
  union_artifact_exp: number;
  union_artifact_point: number;
}

export interface PopularProps {
  date?: string;
  popularity: number;
}

export interface DojangProps {
  date: string;
  character_class: string;
  world_name: string;
  dojang_best_floor: string;
  date_dojang_record: string;
  dojang_best_time: number;
}