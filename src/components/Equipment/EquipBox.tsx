import Image, { StaticImageData } from 'next/image';
import styles from "./equipment.module.css";
import { IEProps } from '@/Types/Equipment';

interface EBoxProps {
  slotCoordinate: string;
  equipmentImage?: string | StaticImageData;
  potentialGrade?: string;
  slotName: string;
  partName?: string;
}

export default function EquipBox({
  slotCoordinate,
  equipmentImage,
  potentialGrade,
  slotName,
  partName,
}: EBoxProps) {
  const gradeClassMap: { [key: string]: string } = {
    레전드리: styles.legendary,
    유니크: styles.unique,
    에픽: styles.epic,
    레어: styles.rare,
  };

  // potentialGrade가 없으면 'none' 클래스를 적용
  const gradeClass = potentialGrade ? gradeClassMap[potentialGrade] || styles.none : styles.none;

  return (
    <div className={`${styles.equipmentSlot} ${slotCoordinate} ${gradeClass}`}>
      <span>{partName}</span>
      {equipmentImage ? 
        <Image
          style={{zIndex: 1}}
          width={30}
          height={30}
          src={equipmentImage}
          alt={slotName}
        /> : null}
    </div>
  );
}
