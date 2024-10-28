export interface EquipProps {
  date?: null;
  character_class: string;
  character_gender: string;
  dragon_equipment?: DProps[];
  item_equipment: IEProps[];
  mechanic_equipment?: MProps[];
  title?: TProps;
}

export interface AndroidProps {
  date?: null;
  android_name: string;
  android_nickname: string;
  android_icon: string;
  android_description: string;
}

export interface ItemAddOption {
  all_stat: string;
  armor: string;
  attack_power: string;
  boss_damage: string;
  damage: string;
  dex: string;
  equipment_level_decrease: number;
  int: string;
  jump: string;
  luk: string;
  magic_power: string;
  max_hp: string;
  max_mp: string;
  speed: string;
  str: string;
}

export interface ItemBaseOption extends ItemAddOption {
  base_equipment_level: number;
  ignore_monster_armor: string;
}

export interface ItemEtcOption extends Pick<ItemAddOption, 'armor' | 'attack_power' | 'dex' | 'int' | 'jump' | 'luk' | 'magic_power' | 'max_hp' | 'max_mp' | 'speed' | 'str'> {}

export interface ItemStarForceOption extends ItemEtcOption {}

export interface ItemTotalOption extends ItemAddOption {}

export interface DProps {
  
}

export interface IEProps {
  additional_potential_option_1: string;
  additional_potential_option_2: string;
  additional_potential_option_3: string;
  additional_potential_option_grade: string;
  cuttable_count: string;
  date_expire?: string;
  equipment_level_increase: number;
  golden_hammer_flag: string;
  growth_exp: number;
  growth_level: number;
  item_add_option :  ItemAddOption;
  item_base_option: ItemBaseOption;
  item_description?: string;
  item_equipment_part: string;
  item_equipment_slot: string;
  item_etc_option: ItemEtcOption;
  item_gender?: string;
  item_icon: string;
  item_name: string;
  item_shape_icon: string;
  item_shape_name: string;
  item_starforce_option: ItemStarForceOption;
  item_total_option : ItemTotalOption
  potential_option_1: string;
  potential_option_2: string;
  potential_option_3: string;
  potential_option_grade: string;
  scroll_resilience_count: string;
  scroll_upgrade: string;
  scroll_upgradeable_count: string;
  soul_name?: string;
  soul_option?: string;
  special_ring_level: number;
  starforce: string;
  starforce_scroll_flag: string;
}

export interface MProps {
  
}

export interface TProps {
  date_expire?: string;
  date_option_expire: string;
  title_description: string;
  title_icon: string;
  title_name: string;
}