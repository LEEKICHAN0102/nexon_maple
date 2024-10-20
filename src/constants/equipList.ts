import hair_icon from "../../public/icon/hair-icon.png"
import face_icon from "../../public/icon/face-icon.png"

export interface EquipmentListItem {
  slot: number;
  name: string;
  partName: string;
  equipNum?: number;
  isAndroid?: boolean;
}

export const equipmentList: EquipmentListItem[] = [
  { slot: 0, name: "반지4", partName: "RING" },
  { slot: 1, name: "모자", partName: "CAP"},
  { slot: 2, name: "엠블렘", partName: "EMBLEM" },
  { slot: 3, name: "반지3", partName: "RING" },
  { slot: 4, name: "펜던트2", partName: "PENDENT" },
  { slot: 5, name: "얼굴장식", partName: "FORE"},
  { slot: 6, name: "뱃지", partName: "BADGE" },
  { slot: 7, name: "반지2", partName: "RING" },
  { slot: 8, name: "펜던트", partName: "PENDENT" },
  { slot: 9, name: "눈장식", partName: "EYE"},
  { slot: 10, name: "귀고리", partName: "EAR"},
  { slot: 11, name: "훈장", partName: "MEDAL" },
  { slot: 12, name: "반지1", partName: "RING" },
  { slot: 13, name: "무기", partName: "WEAPON" },
  { slot: 14, name: "상의", partName: "CLOTHES"},
  { slot: 15, name: "어깨장식", partName: "SHOULDER" },
  { slot: 16, name: "보조무기", partName: "SUB WEP"},
  { slot: 17, name: "포켓 아이템", partName: "POCKET" },
  { slot: 18, name: "벨트", partName: "BELT" },
  { slot: 19, name: "하의", partName: "PANTS"},
  { slot: 20, name: "장갑", partName: "GLOVES"},
  { slot: 21, name: "망토", partName: "CAPE"},
  { slot: 22, name: "신발", partName: "SHOES"},
  { slot: 23, name: "안드로이드", partName: "ANDROID", isAndroid: true },
  { slot: 24, name: "기계 심장", partName: "HEART" },
];

export const cashItemList = [
  { slot: 1, name: "반지4", partName: "RING" },
  { slot: 2, name: "헤어", partName: "HAIR", icon: hair_icon },
  { slot: 3, name: "모자", partName: "CAP" },
  { slot: 4, name: "반지3", partName: "RING" },
  { slot: 5, name: "얼굴", partName: "FACE", icon: face_icon },
  { slot: 6, name: "얼굴장식", partName: "FORE" },
  { slot: 7, name: "반지2", partName: "RING" },
  { slot: 8, name: "피부", partName: "SKIN", icon: face_icon },
  { slot: 9, name: "눈장식", partName: "EYE" },
  { slot: 10, name: "귀고리", partName: "EAR" },
  { slot: 11, name: "반지1", partName: "RING" },
  { slot: 12, name: "무기", partName: "WEAPON" },
  { slot: 13, name: "상의", partName: "CLOTHES" },
  { slot: 14, name: "보조무기", partName: "SUB WEP" },
  { slot: 15, name: "하의", partName: "PANTS" },
  { slot: 16, name: "장갑", partName: "GLOVES" },
  { slot: 17, name: "망토", partName: "CAPE" },
  { slot: 18, name: "신발", partName: "SHOES" },
];

export const androidItemList = [
  { slot: 1, name: "반지4", partName: "RING" },
  { slot: 2, name: "모자", partName: "CAP" },
  { slot: 3, name: "헤어", partName: "HAIR", icon: hair_icon  },
  { slot: 4, name: "반지3", partName: "RING" },
  { slot: 5, name: "얼굴장식", partName: "FORE" },
  { slot: 6, name: "얼굴", partName: "FACE", icon: face_icon },
  { slot: 7, name: "반지2", partName: "RING" },
  { slot: 8, name: "눈장식", partName: "EYE" },
  { slot: 9, name: "피부", partName: "SKIN", icon: face_icon },
  { slot: 10, name: "반지1", partName: "RING" },
  { slot: 11, name: "상의", partName: "CLOTHES" },
  { slot: 12, name: "귀고리", partName: "EAR" },
  { slot: 13, name: "하의", partName: "PANTS" },
  { slot: 14, name: "무기", partName: "WEAPON" },
  { slot: 15, name: "장갑", partName: "GLOVES" },
  { slot: 16, name: "신발", partName: "SHOES" },
  { slot: 17, name: "망토", partName: "CAPE" },
];

export const statKeys = [
  { name: 'STR', key: 'str' },
  { name: 'DEX', key: 'dex' },
  { name: 'INT', key: 'int' },
  { name: 'LUK', key: 'luk' },
  { name: 'HP', key: 'max_hp' },
  { name: 'MP', key: 'max_mp' },
  { name: '공격력', key: 'attack_power' },
  { name: '마력', key: 'magic_power' },
  { name: '방어력', key: 'armor' },
  { name: '이동속도', key: 'speed' },
  { name: '점프력', key: 'jump' },
  { name: '올스탯', key: 'all_stat',  suffix: '%' },
];