import styles from "../Equipment/equipStatBox.module.css";
import { PetProps, PetAutoSkill } from "@/Types/Pet";

// Images
import Image from "next/image";
import dividerImg from "../../../public/icon/bg-divider.png";

interface PBoxProps {
  characterPet: PetProps;
  index: number;
}

export default function PetBox({ characterPet, index }: PBoxProps) {
  const petName = characterPet[`pet_${index}_name` as keyof PetProps];
  const petType = characterPet[`pet_${index}_pet_type` as keyof PetProps];
  const petDateExpire = characterPet[`pet_${index}_date_expire` as keyof PetProps];
  const petAppearanceIcon = characterPet[`pet_${index}_appearance_icon` as keyof PetProps];
  const petSkill: string[] = characterPet[`pet_${index}_skill` as keyof PetProps] || [];
  const petAutoSkill: PetAutoSkill | undefined = characterPet[`pet_${index}_auto_skill` as keyof PetProps];
  const petDescription = characterPet[`pet_${index}_description` as keyof PetProps];

  const date = new Date(petDateExpire);
  const magicHour = `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일 까지`;

  return (
    <div className={styles.detailCoveringBox}>
      <div className={styles.equipDetailBox}>
        
        {/* 상단 스타포스 및 아이템 이름 */}
        <div className={styles.petNameBox}>
          <span className={styles.itemNameSpan}>
            {petName}
          </span>
          <p>{petType}</p>
          <p>마법의 시간: {magicHour}</p>
        </div>

        {/*  아이템 디바이더 */}
        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        {/* 아이템 이미지 */}
        <div className={styles.petImageBox}>
          <img src={petAppearanceIcon} alt={petName} />
          <div className={styles.petTextBox}>
            <span>{petDescription}</span>
            {petSkill.map((ps, i) => (
              <p key={i} className={styles.petSkill}>{ps}</p>
            ))}
          </div>
        </div>
        

        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        {/* skill_1 출력 */}
        {petAutoSkill?.skill_1 && (
          <div className={styles.itemImageBox}>
            <img src={petAutoSkill.skill_1_icon} alt={petAutoSkill.skill_1} />
            <span>{petAutoSkill.skill_1}</span>
          </div>
        )}
        {/* skill_2 출력 */}
        {petAutoSkill?.skill_2 && (
          <div className={styles.itemImageBox}>
            <img src={petAutoSkill.skill_2_icon} alt={petAutoSkill.skill_2} />
            <span>{petAutoSkill.skill_2}</span>
          </div>
        )}
        </div>

    </div>
  );
}
