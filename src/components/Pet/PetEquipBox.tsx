import styles from "../Equipment/equipStatBox.module.css";
import { PetEquipment } from "@/Types/Pet";

// Images
import Image from "next/image";
import dividerImg from "../../../public/icon/bg-divider.png";

interface PBoxProps {
  petEquipment: PetEquipment;
}

export default function PetEquipBox({ petEquipment }: PBoxProps) {

  return (
    <div className={styles.detailCoveringBox}>
      <div className={styles.equipDetailBox}>
        <div className={styles.itemNameBox}>
          <span className={styles.itemNameSpan}>
            {petEquipment.item_name}
            {Number(petEquipment.scroll_upgrade) > 0 && `(+${petEquipment.scroll_upgrade})`}
          </span>
        </div>

        {/*  아이템 디바이더 */}
        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        {/* 아이템 이미지 */}
        <div className={styles.itemImageBox}>
          <img src={petEquipment.item_shape_icon} alt={petEquipment.item_name} />
        </div>

        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        <div className={styles.itemStatBox}>
          <span>장비 분류: 펫 장비</span>
          {petEquipment.item_option.map((option, i) => (
            <span key={i}>{option.option_type}: {option.option_value}</span>
          ))}
          <span>업그레이드 가능 횟수: {petEquipment.scroll_upgradable}</span>
        </div>

        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        <div className={styles.itemStatBox}>
          <span>{petEquipment.item_description}</span>
        </div>

      </div>
    </div>
  );
}
