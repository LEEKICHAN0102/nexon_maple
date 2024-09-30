import styles from "./card.module.css";
import { CharacterProps } from "@/Types/Character";

interface CardProps {
  character: CharacterProps | null;
}

export default function Card({character}: CardProps) {
  const sliceDate = character?.character_date_create.substring(0,10);

  return(
    <>
      <div className={styles.cardBox}>
        <div className={styles.mainInfo}>
          <div className={styles.cardImage}>
            <img src={`${character?.character_image}`} alt="대표 이미지" />
          </div>
          <div className={styles.textMain}>
            <div className={styles.textBox}>
              {character?.character_name} 
              <div className={styles.smallText}>
                {character?.world_name} 🔗{character?.character_guild_name}
              </div>
            </div>
            <div className={styles.textBox}>
              LV {character?.character_level} | {character?.character_class} 
              <div className={styles.smallText}>
                ({character?.character_exp_rate}%)
              </div>
            </div>
            <div className={styles.smallText}>생성일: {sliceDate}</div>
          </div>
        </div>
      </div>
    </>
  )
}