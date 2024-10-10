interface HairProps {
  hair_name: string;
  base_color: string;
  mix_color: string;
  mix_rate: string;
}

interface FaceProps {
  face_name: string;
  base_color: string;
  mix_color: string;
  mix_rate: string;
}

interface SkinProps {
  skin_name: string
  color_style: string;
  hue: number;
  saturation: number;
  brightness: number;
}

export interface BeautyProps {
  data: string;
  character_gender: string;
  character_class: string;
  character_hair: HairProps[];
  character_face: FaceProps[];
  character_skin: SkinProps[];
  additional_character_hair: HairProps[];
  additional_character_face: FaceProps[];
  additional_character_skin: SkinProps[];
}