export interface LinkObjectProps {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_effect_next: string;
  skill_icon: string;
}

export interface LinkProps {
  date: string;
  character_class: string;
  character_link_skill: LinkObjectProps[];
}