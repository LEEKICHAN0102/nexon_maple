
export interface HexaObjectProps {
  hexa_core_name: string;
  hexa_core_level: number;
  hexa_core_type: string;
  linked_skill: [];
}

export interface HexaProps {
  data: string;
  character_hexa_core_equipment: HexaObjectProps[];
}