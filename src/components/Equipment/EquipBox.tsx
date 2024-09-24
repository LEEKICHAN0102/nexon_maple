import Image, { StaticImageData } from 'next/image';
import styles from "./equipment.module.css";
import victory from "../../../public/addonevictory.jpg";

interface EBoxProps {
  slotCoordinate: string;
  equipmentImage: string | StaticImageData;
  altImage: string;
}

export default function EquipBox({
  slotCoordinate,
  equipmentImage,
  altImage,
}: EBoxProps) {
  return (
    <div className={`${styles.equipmentSlot} ${slotCoordinate}`}>
      <Image
        width={30}
        height={30}
        src={equipmentImage ? equipmentImage : victory}
        alt={altImage}
      />
    </div>
  );
}
