export interface AbilityObjectProps {
  ability_no: string;
  ability_grade: string;
  ability_value: string;
}

export interface AbilityPresetProps {
  ability_preset_grade: string;
  ability_info: AbilityObjectProps[];
}

export interface AbilityProps {
  date?: null;
  ability_grade: string;
  ability_info: AbilityObjectProps[];
  remain_fame: number;
  preset_no: number;
  ability_preset_1: AbilityPresetProps[];
  ability_preset_2: AbilityPresetProps[];
  ability_preset_3: AbilityPresetProps[];
}