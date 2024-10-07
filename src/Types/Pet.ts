// Pet 자동 스킬에 대한 타입
export interface PetAutoSkillProps {
  skill_1: string;
  skill_1_icon: string;
  skill_2: string;
  skill_2_icon: string;
}

// 펫 장비 아이템에 대한 타입
export interface PetEquipmentItemProps {
  item_name: string;
  item_icon: string;
  item_description: string;
  item_option: ItemOptionProps[];
  scroll_upgrade: number;
  scroll_upgradable: number;
  item_shape: string;
  item_shape_icon: string;
}

// 아이템 옵션에 대한 타입
export interface ItemOptionProps {
  option_type: string;
  option_value: string;
}

// 펫에 대한 타입
export interface PetDataProps {
  pet_name: string;
  pet_nickname: string;
  pet_icon: string;
  pet_description: string;
  pet_equipment: PetEquipmentItemProps;
  pet_auto_skill: PetAutoSkillProps;
  pet_type: string;
  pet_skill: string[];
  pet_date_expire: string;
  pet_appearance: string;
  pet_appearance_icon: string;
}

// 전체 데이터 구조에 대한 타입
export interface PetProps {
  date?: string;
  pet_1: PetProps;
  pet_2: PetProps;
  pet_3: PetProps;
}
