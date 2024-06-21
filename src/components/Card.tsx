import { CharacterProps } from "@/app/page";
import styles from "@/components/card.module.css";

interface CardProps {
  character: CharacterProps;
}

export default function Card({character}: CardProps) {
  const sliceDate = character.character_date_create.substring(0,10);

  return(
    <div className={styles.cardBox}>
      <div className={styles.cardImage}>
        <img src={`${character.character_image}`} alt="대표 이미지" />
      </div>
      <div className={styles.textMain}>
        <h2>{character.character_name}</h2>
        <p>{character.character_class}</p>
      </div>
      <section className={styles.textSection}>
        <table className={styles.tableText}>월드: {character.world_name}</table>
        <table className={styles.tableText}>성별: {character.character_gender}</table>
        <table className={styles.tableText}>Lv: {character.character_level}</table>
        <table className={styles.tableText}>exp: {character.character_exp_rate}%</table>
        <table className={styles.tableText}>생성: {sliceDate}</table>
        <table className={styles.tableText}>길드: {character.character_guild_name}</table>
      </section>
    </div>
  )
}