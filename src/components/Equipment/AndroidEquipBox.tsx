import styles from "../Equipment/equipStatBox.module.css";
import { AndroidCashItemEquipmentProps } from "@/Types/Android";

// Images
import Image from "next/image";
import dividerImg from "../../../public/icon/bg-divider.png";

interface AndroidEquipBoxProps {
  characterAndroid: AndroidCashItemEquipmentProps;
}

export default function AndroidEquipBox({ characterAndroid }: AndroidEquipBoxProps) {
  const expireDate = characterAndroid.date_option_expire
  ? (() => {
      const date = new Date(characterAndroid.date_option_expire);
      return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일 까지`;
    })()
  : null;

  return (
    <div className={styles.detailCoveringBox}>
      <div className={styles.equipDetailBox}>
        
        <div className={styles.starForceBox}>
          <div className={styles.itemNameBox}>
            <span className={styles.itemNameSpan}>
              {characterAndroid.cash_item_name}
            </span>
            {characterAndroid.cash_item_label && <span className={styles.itemLabel}>{characterAndroid.cash_item_label}</span>}
            {characterAndroid.date_option_expire && <span className={styles.petSkill}>기간 한정 능력치, 유효기간 연장 불가</span>}
            <p>{expireDate}</p>
          </div>
        </div>

        {/*  아이템 디바이더 */}
        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        {/* 아이템 이미지 */}
        <div className={styles.petImageBox}>
          <img src={characterAndroid.cash_item_icon} alt={characterAndroid.cash_item_name} />
          <div className={styles.cashOptionBox}>
            <span>{characterAndroid.cash_item_description}</span>
            {characterAndroid.cash_item_option.map((option, i) => (
              <p key={i} className={styles.cashOption}>{option.option_type}: (+{option.option_value})</p>
            ))}
          </div>
        </div>

        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        {/* 기본 옵션 */}
        <div className={styles.itemStatBox}>
          <span>장비 분류: {characterAndroid.cash_item_equipment_part}</span>
        </div>

      </div>
    </div>
  );
}
