import styles from './starForce.module.css';

import Image from 'next/image';
import fullStar from "@/../../public/icon/full_star_icon.png";

interface SProps {
  starCount: string;
}

export default function StarForce({ starCount }: SProps) {
  if (starCount === "0") {
    return null;
  }

  return (
    <div className={styles.starContainer}>
      <Image src={fullStar} alt="full_star" />
        {starCount} 성
      <Image src={fullStar} alt="full_star" />
    </div>
  );
}
