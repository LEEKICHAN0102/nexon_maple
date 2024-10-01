export interface HyperObjectProps {
  stat_type: string;
  stat_point: number;
  stat_level: number;
  stat_increase: string;
}

export interface HyperProps {
  date?: null;
  character_class: string;
  use_preset_no: string;
  use_available_hyper_stat: number;
  hyper_stat_preset_1: HyperObjectProps[];
  hyper_stat_preset_2: HyperObjectProps[];
  hyper_stat_preset_3: HyperObjectProps[];
  hyper_stat_preset_1_remain_point: number;
  hyper_stat_preset_2_remain_point: number;
  hyper_stat_preset_3_remain_point: number;
}