import styles from "./pet.module.css";
import { PetProps, PetEquipment } from "@/Types/Pet";
import PetBox from "./PetBox";
import PetEquipBox from "./PetEquipBox"; // 장비 박스 import
import { useState } from "react";

// Props 인터페이스 정의
interface PetsProps {
  characterPet: PetProps;
}

export default function Pet({ characterPet }: PetsProps) {
  const [hoveredPet, setHoveredPet] = useState<number | null>(null);
  const [hoveredPetEquipment, setHoveredPetEquipment] = useState<number | null>(null);

  return (
    <div className={styles.petMain}>
      <span className={styles.petSpan}>PET</span>
      <div className={styles.petContent}>
        {/* 첫 번째 펫 */}
        <div className={styles.petContent}>
          <div className={styles.petContentDiv}>
            <span className={styles.petSubSpan}>01</span>
            <div className={styles.petImageContent}>
            <div 
              className={styles.petImageDiv}
              onMouseEnter={() => setHoveredPet(1)}
              onMouseLeave={() => setHoveredPet(null)}
            >
              <img 
                src={characterPet?.pet_1_appearance_icon} 
                alt={characterPet?.pet_1_name} 
              />
            </div>
            <div 
              className={styles.petImageDiv}
              onMouseEnter={() => setHoveredPetEquipment(1)}
              onMouseLeave={() => setHoveredPetEquipment(null)}
            >
              <img 
                src={characterPet?.pet_1_equipment?.item_shape_icon} 
                alt={characterPet?.pet_1_equipment?.item_name} 
              />
            </div>
          </div>
          {hoveredPet === 1 && (
            <div className={styles.petBoxContainer}>
              <PetBox characterPet={characterPet} index={1} />
            </div>
          )}
          {hoveredPetEquipment === 1 && (
            <div className={styles.petBoxContainer}>
              <PetEquipBox petEquipment={characterPet?.pet_1_equipment} />
            </div>
          )}
          </div>
        </div>

        {/* 두 번째 펫 */}
        <div className={styles.petContentDiv}>
          <span className={styles.petSubSpan}>02</span>
          <div className={styles.petImageContent}>
            <div
              className={styles.petImageDiv}
              onMouseEnter={() => setHoveredPet(2)}
              onMouseLeave={() => setHoveredPet(null)}
            >
              <img 
                src={characterPet?.pet_2_appearance_icon} 
                alt={characterPet?.pet_2_name} 
              />
            </div>
            <div 
              className={styles.petImageDiv}
              onMouseEnter={() => setHoveredPetEquipment(2)}
              onMouseLeave={() => setHoveredPetEquipment(null)}
            >
              <img 
                src={characterPet?.pet_2_equipment?.item_shape_icon} 
                alt={characterPet?.pet_2_equipment?.item_name} 
              />
            </div>
          </div>
          {hoveredPet === 2 && (
            <div className={styles.petBoxContainer}>
              <PetBox characterPet={characterPet} index={2} />
            </div>
          )}
          {hoveredPetEquipment === 2 && (
            <div className={styles.petBoxContainer}>
              <PetEquipBox petEquipment={characterPet?.pet_2_equipment} />
            </div>
          )}
        </div>

        {/* 세 번째 펫 */}
        <div className={styles.petContentDiv}>
          <span className={styles.petSubSpan}>03</span>
          <div className={styles.petImageContent}>
            <div
              className={styles.petImageDiv}
              onMouseEnter={() => setHoveredPet(3)}
              onMouseLeave={() => setHoveredPet(null)}
            >
              <img 
                src={characterPet?.pet_3_appearance_icon} 
                alt={characterPet?.pet_3_name} 
              />
            </div>
            <div 
              className={styles.petImageDiv}
              onMouseEnter={() => setHoveredPetEquipment(3)}
              onMouseLeave={() => setHoveredPetEquipment(null)}
            >
              <img 
                src={characterPet?.pet_3_equipment?.item_shape_icon} 
                alt={characterPet?.pet_3_equipment?.item_name} 
              />
            </div>
          </div>
          {hoveredPet === 3 && (
            <div className={styles.petBoxContainer}>
              <PetBox characterPet={characterPet} index={3} />
            </div>
          )}
          {hoveredPetEquipment === 3 && (
            <div className={styles.petBoxContainer}>
              <PetEquipBox petEquipment={characterPet?.pet_3_equipment} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
