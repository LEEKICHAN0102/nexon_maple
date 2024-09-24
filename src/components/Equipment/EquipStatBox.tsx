import styles from "./equipment.module.css"
import Image from "next/image";

export default function EquipStatBox({data}: any) {
  return (
    <>
      <div className={styles.equipDetailBox}>
        <div className={styles.starForceBox}>
          <span>★ {data.star} 성 ★</span>
          <span>{}</span>
          <span>{}</span>
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