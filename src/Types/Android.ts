export interface AndroidProps {
  date?: string;
  android_name: string;
  android_nickname: string;
  android_icon: string;
  android_description: string;
  android_hair: AndroidHairProps;
  android_face: AndroidFaceProps;
  android_skin: AndroidSkinProps;
  android_cash_item_equipment: AndroidCashItemEquipmentProps[];
  android_ear_sensor_clip_flag: string;
  android_gender: string;
  android_grade: string;
  android_non_humanoid_flag: string;
  android_shop_usable_flag: string;
}

interface AndroidHairProps {
  hair_name: string;
  base_color: string;
  mix_color: string;
  mix_rate: string;
}

interface AndroidFaceProps {
  face_name: string;
  base_color: string;
  mix_color: string;
  mix_rate: string;
}

interface AndroidSkinProps {
  skin_name: string;
  color_style: string;
  hue: number;
  saturation: number;
  brightness: number;
}

export interface AndroidCashItemEquipmentProps {
  cash_item_equipment_part: string;
  cash_item_equipment_slot: string;
  cash_item_name: string;
  cash_item_icon: string;
  cash_item_description: string;
  cash_item_option: CashItemOptionProps[];
  date_expire: string;
  date_option_expire: string;
  cash_item_label: string;
  cash_item_coloring_prism: CashItemColoringPrismProps;
  android_item_gender: string;
}

interface CashItemOptionProps {
  option_type: string;
  option_value: string;
}

interface CashItemColoringPrismProps {
  color_range: string;
  hue: number;
  saturation: number;
  value: number;
}