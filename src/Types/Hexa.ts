import { VProps, VObjectProps } from "./VMatrix";

export interface HexaObjectProps extends VObjectProps {}

export interface HexaProps extends VProps {
  character_skill: HexaObjectProps[];
}


export interface HexaStatObjectprops {
  slot_id: string;
  main_stat_name: string;
  main_stat_level: number;
  sub_stat_name_1: string;
  sub_stat_level_1: number;
  sub_stat_name_2: string;
  sub_stat_level_2: number;
  stat_grade: number;
}

export interface HexaStatProps {
  date? :string;
  character_class: string;
  character_hexa_stat_core: HexaStatObjectprops[];
  character_hexa_stat_core_2: HexaStatObjectprops[];
}