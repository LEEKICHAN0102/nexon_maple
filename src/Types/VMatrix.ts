export interface VObjectProps {
  slot_id: string;
  slot_level: number;
  v_core_name: string;
  v_core_type: string;
  v_core_level: number;
  v_core_skill_1: string;
  v_core_skill_2: string;
  v_core_skill_3: string;
}


export interface VProps {
  data: string;
  character_class: string;
  character_v_core_equipment: VObjectProps[];
}