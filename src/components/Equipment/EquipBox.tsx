import Image, { StaticImageData } from 'next/image';
import styles from "./equipment.module.css";
import victory from "../../../public/addonevictory.jpg";

interface EBoxProps {
  slotCoordinate: string;
  equipmentImage?: string | StaticImageData;
  potentialGrade?: string;
  altImage: string;
}

export default function EquipBox({
  slotCoordinate,
  equipmentImage,
  potentialGrade,
  altImage,
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
      <Image
        width={30}
        height={30}
        src={equipmentImage ? equipmentImage : victory}
        alt={altImage}
      />
    </div>
  );
}
