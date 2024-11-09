import { useCharacterQueries } from "@/hooks/apis/Character/useCharacterQureis";
import useOcid from "@/store/ocid";
import styles from "./character.module.css";
import Loading from "../Loading/Loading";

export default function Character() {
  const { ocidState } = useOcid();
  const results = useCharacterQueries(ocidState);

  const isLoading = results.some(result => result.isLoading);
  const isError = results.some(result => result.isError);

  if (!ocidState && isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  
  const characterData = results[0].data;
  const unionData = results[1].data;
  const dojangData = results[2].data;
  const popularData = results[3].data;

  return (
    <div className={styles.characterInfo}>
      <p className={styles.mainTitle}>CHARACTER INFO</p>
      <div className={styles.mainContent}>
        <div className={styles.left}>
          <div className={styles.borderBox}>{characterData?.character_class}</div>
          <div className={styles.leftDown}>
            <div className={styles.borderBox}>유니온
              <span>{unionData?.union_level}</span>
            </div>
            <div className={styles.borderBox}>무릉도장
              <span>{dojangData?.dojang_best_floor} 층</span>
            </div>
            <div className={styles.borderBox}>인기도
              <span>{popularData?.popularity}</span>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.levelBox}>Lv. {characterData?.character_level}</div>
          <div className={styles.imageBox}>
            <img src={`${characterData?.character_image}`} alt="대표 이미지" style={{ width: "130px", height: "130px" }} />
            <div className={styles.nameDiv}>{characterData?.character_name}</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={`${styles.borderBox} ${styles.blueBack}`}>길드</div>
          <div className={styles.borderBox}>길드
            <span>{characterData?.character_guild_name || '없음'}</span>
          </div>
          <div className={styles.borderBox}>연합
            <span>{characterData?.character_guild_name || '---'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
