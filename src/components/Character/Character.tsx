import styles from "./character.module.css";
import { CharacterProps } from "@/Types/Character";

interface CardProps {
  character: CharacterProps | null;
}

export default function Card({character}: CardProps) {
  console.log(character, "캐릭터 정보");

  return(
    <div className={styles.characterInfo}>
      <p className={styles.mainTitle}>CHARACTER INFO</p>
      <div className={styles.mainContent}>
        <div className={styles.left}>
          <div className={styles.borderBox}>{character?.character_class}</div>
          <div className={styles.leftDown}>
            <div className={styles.borderBox}>유니온</div>
            <div className={styles.borderBox}>무릉도장</div>
            <div className={styles.borderBox}>인기도</div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.levelBox}>Lv. {character?.character_level}</div>
          <div className={styles.imageBox}>
            <img src={`${character?.character_image}`} alt="대표 이미지" style={{width: "130px", height: "130px"}} />
            <div className={styles.nameDiv}>{character?.character_name}</div>
          </div>
        </div>
        <div className={styles.right}>
            <div className={`${styles.borderBox} ${styles.blueBack}`}>길드</div>
            <div className={styles.borderBox}>길드</div>
            <div className={styles.borderBox}>연합</div>
        </div>
      </div>
    </div>
  )
}