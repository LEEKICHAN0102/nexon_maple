import Image, { StaticImageData } from 'next/image';
import styles from "./equipment.module.css";
import { EquipProps } from '@/Types/Equipment';
import EquipStatBox from './EquipStatBox';

interface EBoxProps {
  slotCoordinate: string;
  equipmentImage?: string | StaticImageData;
  potentialGrade?: string;
  slotName: string;
  partName?: string;
  onClick: () => void;
}

export default function EquipBox({
  slotCoordinate,
  equipmentImage,
  potentialGrade,
  slotName,
  partName,
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
    <div className={`${styles.equipmentSlot} ${slotCoordinate} ${gradeClass}`} onClick={onClick}>
      <span className={styles.equipPartSpan}>{partName}</span>
      {equipmentImage ? 
        <Image
          style={{ zIndex: 1 }}
          width={30}
          height={30}
          src={equipmentImage}
          alt={slotName}
        /> : null}
    </div>
  );
}
