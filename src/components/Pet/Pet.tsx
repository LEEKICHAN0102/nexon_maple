import styles from "./pet.module.css";

// types
import { PetProps } from "@/Types/Pet"

interface PetsProps {
  characterPet: PetProps;
}

export default function Pet({ characterPet }: PetsProps) {
  console.log("펫 정보:", characterPet);

  return(
    <div className={styles.petMain}>
      <span className={styles.petSpan}>PET</span>
      <div className={styles.petContent}>
        <div className={styles.petContentDiv}>
          <span className={styles.petSubSpan}>01</span>
          <div className={styles.petImageContent}>
            <div className={styles.petImageDiv}>
              <img src={characterPet.pet_1_appearance_icon} alt={characterPet.pet_1_name} />
            </div>
            <div className={styles.petImageDiv}>
              <img src={characterPet.pet_1_equipment?.item_shape_icon} alt={characterPet.pet_1_equipment?.item_name} />
            </div>
          </div>
        </div>
        <div className={styles.petContentDiv}>
          <span className={styles.petSubSpan}>02</span>
          <div className={styles.petImageContent}>
            <div className={styles.petImageDiv}>
              <img src={characterPet.pet_2_appearance_icon} alt={characterPet.pet_2_name} />
            </div>
            <div className={styles.petImageDiv}>
              <img src={characterPet.pet_2_equipment?.item_shape_icon} alt={characterPet.pet_2_equipment?.item_name} />
            </div>
          </div>
        </div>
        <div className={styles.petContentDiv}>
          <span className={styles.petSubSpan}>03</span>
          <div className={styles.petImageContent}>
            <div className={styles.petImageDiv}>
              <img src={characterPet.pet_3_appearance_icon} alt={characterPet.pet_3_name} />
            </div>
            <div className={styles.petImageDiv}>
              <img src={characterPet.pet_3_equipment?.item_shape_icon} alt={characterPet.pet_3_equipment?.item_name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // 펫이 없어도 3개는 출력 되어야 함 (반복문 X)
}