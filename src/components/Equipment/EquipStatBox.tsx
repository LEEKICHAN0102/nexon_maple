import styles from "./equipment.module.css"
import Image from "next/image";

import { IEProps } from "@/Types/Equipment";

interface BoxProps {
  characterEquipment: IEProps;
}

export default function EquipStatBox({ characterEquipment }: BoxProps) {
  return (
    <>
      <div className={styles.equipDetailBox}>
        <div className={styles.starForceBox}>
          <span>★ {characterEquipment.starforce} 성 ★</span>
          <span>{characterEquipment.item_name} (+{characterEquipment.scroll_upgrade})</span>
          <span>({characterEquipment.potential_option_grade} 아이템)</span>
        </div>
        <div className={styles.imageBox}>
          <span></span>
        </div>
        <div className={styles.OptionBox}>
          <span>장비 분류: {}</span>

        </div>
        <div className={styles.potentialBox}>
          <span> 잠재 옵션</span>
          <span>{}</span>
          <span>{}</span>
          <span>{}</span>
        </div>
        <div className={styles.additionalBox}>
          <span> 에디셔널 잠재 옵션</span>
          <span>{}</span>
          <span>{}</span>
          <span>{}</span>
        </div>
      </div>
    </>
  );
}