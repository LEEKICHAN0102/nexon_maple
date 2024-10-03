export interface AbilityObjectProps {
  ability_no: string;
  ability_grade: string;
  ability_value: string;
}

export interface AbilityPresetProps {
  preset: {
    ability_preset_grade: string;  // 어빌 등급
    ability_info: AbilityObjectProps[];  // 적용 어빌 정보
  };
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