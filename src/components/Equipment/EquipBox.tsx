import Image, { StaticImageData } from 'next/image';
import styles from "./equipment.module.css";

interface EBoxProps {
  slotCoordinate: string;
  equipmentImage?: string | StaticImageData;
  potentialGrade?: string;
  slotName: string;
  partName?: string;
  isCursor?: boolean;
  onClick?: () => void;
}

export default function EquipBox({
  slotCoordinate,
  equipmentImage,
  potentialGrade,
  slotName,
  partName,
  isCursor,
  onClick,
}: EBoxProps) {
  const gradeClassMap: { [key: string]: string } = {
    레전드리: styles.legendary,
    유니크: styles.unique,
    에픽: styles.epic,
    레어: styles.rare,
  };

  const gradeClass = potentialGrade ? gradeClassMap[potentialGrade] || styles.none : styles.none;

  return (
    <div className={`${styles.equipmentSlot} ${slotCoordinate} ${gradeClass} ${isCursor ? styles.cursor : ""}`} onClick={onClick}>
      <span className={styles.equipPartSpan}>{partName}</span>
      {equipmentImage ? 
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            objectFit="contain"
            src={equipmentImage}
            alt={slotName || "Equipment Alt"}
          />
        </div> : null}
    </div>
  );
}
