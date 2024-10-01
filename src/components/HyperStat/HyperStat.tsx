import styles from "./hyperStat.module.css";

export default function HyperStat({ characterHyper }: { characterHyper: any }) {
  const hyper = characterHyper;

  console.log("하이퍼스텟 보기:", hyper);

  return(
    <div className={styles.mainDiv}>
      <p className={styles.mainTitle}>HYPER STAT</p>
      <div className={styles.contentDiv}>
        <span></span>
      </div>
      <div className={styles.presetDiv}>gd</div>
      <div className={styles.pointDiv}>gd</div>
    </div>
  )
}
