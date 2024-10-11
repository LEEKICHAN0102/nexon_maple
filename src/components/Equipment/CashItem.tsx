import styles from "./cashItem.module.css";
import EquipBox from "./EquipBox";
import { CashProps } from "@/Types/CashItem";
import useCharacterItems from "@/hooks/useCharacterItems";

// icons
import hair_icon from "../../../public/icon/hair-icon.png";
import face_icon from "../../../public/icon/face-icon.png";

interface CashItemProps {
  characterCash: CashProps;
}

export default function CashItem({ characterCash }: CashItemProps) {
  const cash = useCharacterItems(characterCash, "cash");

  console.log(characterCash, "캐시아이템 보깅");
  
  return (
    <div className={styles.cashColumn}>
      <span className={styles.cashSpan}>CASH ITEM</span>
        <div className={styles.cashContainer}>
          <EquipBox 
            slotCoordinate={styles['slot-1']}
            equipmentImage={cash["반지4"]}
            altImage={"반지4"}
            partName="RING"
          />
          <EquipBox 
            slotCoordinate={styles['slot-2']}
            equipmentImage={hair_icon}
            altImage={"헤어"}
            partName="HAIR"
          />
          <EquipBox 
            slotCoordinate={styles['slot-3']}
            equipmentImage={cash["모자"]}
            altImage={"모자"}
            partName="CAP"
          />
          <EquipBox 
            slotCoordinate={styles['slot-4']}
            equipmentImage={cash["반지3"]}
            altImage={"반지3"}
            partName="RING"
          />
          <EquipBox 
            slotCoordinate={styles['slot-5']}
            equipmentImage={face_icon}
            altImage={"얼굴"}
            partName="FACE"
          />
          <EquipBox 
            slotCoordinate={styles['slot-6']}
            equipmentImage={cash["얼굴장식"]}
            altImage={"얼굴장식"}
            partName="FORE"
          />
          <EquipBox 
            slotCoordinate={styles['slot-7']}
            equipmentImage={cash["반지2"]}
            altImage={"반지2"}
            partName="RING"
          />
          <EquipBox 
            slotCoordinate={styles['slot-8']}
            equipmentImage={face_icon}
            altImage={"피부"}
            partName="SKIN"
          />
          <EquipBox 
            slotCoordinate={styles['slot-9']}
            equipmentImage={cash["눈장식"]}
            altImage={"눈장식"}
            partName="EYE"
          />
          <EquipBox 
            slotCoordinate={styles['slot-10']}
            equipmentImage={cash["귀걸이"]}
            altImage={"귀걸이"}
            partName="EAR"
          />
          <EquipBox 
            slotCoordinate={styles['slot-11']}
            equipmentImage={cash["반지1"]}
            altImage={"반지1"}
            partName="RING"
          />
          <EquipBox 
            slotCoordinate={styles['slot-12']}
            equipmentImage={cash["무기"]}
            altImage={"무기"}
            partName="WEAPON"
          />
          <EquipBox 
            slotCoordinate={styles['slot-13']}
            equipmentImage={cash["상의"]}
            altImage={"상의"}
            partName="CLOTHES"
          />
          <EquipBox 
            slotCoordinate={styles['slot-14']}
            equipmentImage={cash["보조무기"]}
            altImage={"보조무기"}
            partName="SUB"
          />
          <EquipBox 
            slotCoordinate={styles['slot-15']}
            equipmentImage={cash["하의"]}
            altImage={"하의"}
            partName="PANTS"
          />
          <EquipBox 
            slotCoordinate={styles['slot-16']}
            equipmentImage={cash["장갑"]}
            altImage={"장갑"}
            partName="GLOVES"
          />
          <EquipBox 
            slotCoordinate={styles['slot-17']}
            equipmentImage={cash["망토"]}
            altImage={"망토"}
            partName="CAPE"
          />
          <EquipBox 
            slotCoordinate={styles['slot-18']}
            equipmentImage={cash["신발"]}
            altImage={"신발"}
            partName="SHOES"
          />
        </div>
    </div>
  );
}
