import styles from "../Equipment/equipStatBox.module.css";
import { BeautyProps } from "@/Types/Beauty";

// Images
import Image from "next/image";
import dividerImg from "../../../public/icon/bg-divider.png";

interface BeautyBoxProps {
  characterBeauty: BeautyProps;
  selectedBeauty: string | null; // 클릭된 뷰티 항목
}

export default function BeautyBox({ characterBeauty, selectedBeauty }: BeautyBoxProps) {

  // 선택된 뷰티 항목에 따라 데이터를 구분
  const getBeautyDetails = () => {
    if (selectedBeauty === "헤어" && characterBeauty.character_face) {
      return (
        <div className={styles.beautyStatBox}>
          <p>헤어: {characterBeauty.character_hair.hair_name}</p>
          <p>베이스 색상: {characterBeauty.character_hair.base_color}</p>
          <p>믹스 색상: {characterBeauty.character_hair.mix_color}</p>
          <p>믹스 비율: {characterBeauty.character_hair.mix_rate}%</p>
        </div>
      );
    } 
    if (selectedBeauty === "얼굴" && characterBeauty.character_face) {
      return (
        <div className={styles.beautyStatBox}>
          <p>얼굴: {characterBeauty.character_face.face_name}</p>
          <p>베이스 색상: {characterBeauty.character_face.base_color}</p>
          <p>믹스 색상: {characterBeauty.character_face.mix_color}</p>
          <p>믹스 비율: {characterBeauty.character_face.mix_rate}%</p>
        </div>
      );
    }
    if (selectedBeauty === "피부" && characterBeauty.character_skin) {
      return (
        <div className={styles.beautyStatBox}>
          <p>피부: {characterBeauty.character_skin.skin_name}</p>
        </div>
      );
    }
    return <p>선택된 항목이 없습니다.</p>;
  };

  return (
    <div className={styles.detailCoveringBox}>
      <div className={styles.equipDetailBox}>
        
        <div className={styles.starForceBox}>
          <div className={styles.itemNameBox}>
            <span className={styles.itemNameSpan}>뷰티 옵션</span>
            <p>{selectedBeauty}</p>
          </div>
        </div>

        {/*  아이템 디바이더 */}
        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        {/* 아이템 이미지 */}
        <div className={styles.petImageBox}>
          <div className={styles.cashOptionBox}>
            {getBeautyDetails()}
          </div>
        </div>
      </div>
    </div>
  );
}
