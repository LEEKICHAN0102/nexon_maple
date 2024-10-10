import styles from "./cashItem.module.css";
import EquipBox from "./EquipBox";
import { CashProps } from "@/Types/CashItem";
import useCharacterCash from "@/hooks/useCharacterCash";

interface CashItemProps {
  characterCash: CashProps;
}

export default function CashItem({ characterCash }: CashItemProps) {
  const cash = useCharacterCash(characterCash);

  console.log(characterCash, "캐시아이템 보깅");
  
  return (
    <div className={styles.cashColumn}>
      <span className={styles.cashSpan}>CASH ITEM</span>
        <div className={styles.cashContainer}>
        <EquipBox 
          slotCoordinate={styles['slot-1']}
          equipmentImage={cash["반지4"]}
          altImage={"반지4"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-2']}
          equipmentImage={cash["모자"]}
          altImage={"모자"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-3']}
          equipmentImage={cash["엠블렘"]}
          altImage={"엠블렘"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-4']}
          equipmentImage={cash["반지3"]}
          altImage={"반지3"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-5']}
          equipmentImage={cash["펜던트2"]}
          altImage={"펜던트2"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-6']}
          equipmentImage={cash["얼굴장식"]}
          altImage={"얼굴장식"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-7']}
          equipmentImage={cash["뱃지"]}
          altImage={"뱃지"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-8']}
          equipmentImage={cash["반지2"]}
          altImage={"반지2"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-9']}
          equipmentImage={cash["펜던트"]}
          altImage={"펜던트"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-10']}
          equipmentImage={cash["눈장식"]}
          altImage={"눈장식"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-11']}
          equipmentImage={cash["귀고리"]}
          altImage={"귀고리"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-12']}
          equipmentImage={cash["훈장"]}
          altImage={"훈장"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-13']}
          equipmentImage={cash["반지1"]}
          altImage={"반지1"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-14']}
          equipmentImage={cash["무기"]}
          altImage={"무기"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-15']}
          equipmentImage={cash["상의"]}
          altImage={"상의"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-16']}
          equipmentImage={cash["어깨장식"]}
          altImage={"어깨장식"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-17']}
          equipmentImage={cash["보조무기"]}
          altImage={"보조무기"}
        />
        <EquipBox 
          slotCoordinate={styles['slot-18']}
          equipmentImage={cash["포켓 아이템"]}
          altImage={"포켓 아이템"}
        />
      </div>
    </div>
  );
}
