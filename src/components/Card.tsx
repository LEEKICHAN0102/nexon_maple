import Detail from "@/@modal/Detail";
import { CharacterProps } from "@/app/page";
import styles from "@/components/card.module.css";
import { useState } from "react";

interface CardProps {
  character: CharacterProps;
}

export default function Card({character}: CardProps) {
  const sliceDate = character.character_date_create.substring(0,10);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  }

  return(
    <>
      {isModalOpen ? <Detail /> : (
        <div className={styles.cardBox}>
          <div className={styles.cardImage}>
            <img src={`${character.character_image}`} alt="대표 이미지" />
          </div>
          <div className={styles.textMain}>
            <h2>{character.character_name}</h2>
            <p>{character.character_class}</p>
          </div>
          <section className={styles.textSection}>
            <div className={styles.tableText}>월드: {character.world_name}</div>
            <div className={styles.tableText}>성별: {character.character_gender}</div>
            <div className={styles.tableText}>Lv: {character.character_level}</div>
            <div className={styles.tableText}>exp: {character.character_exp_rate}%</div>
            <div className={styles.tableText}>생성: {sliceDate}</div>
            <div className={styles.tableText}>길드: {character.character_guild_name}</div>
          </section>
          <button className={styles.detailButton} onClick={handleModalOpen}>자세히 보기</button>
        </div>
      )}
    </>
  )
}