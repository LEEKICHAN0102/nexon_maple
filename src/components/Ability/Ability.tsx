import styles from "./ability.module.css";

export default function Ability({ characterAbility }: { characterAbility: any }) {
  const abil = characterAbility;

  console.log("어빌 보기:", abil);

  return(
    <div className={styles.mainDiv}>
      <p className={styles.mainTitle}>ABILITY</p>
      <div className={styles.gradeDiv}></div>
      <div className={styles.presetDiv}>
        
      </div>
      <div className={styles.pointDiv}>gd</div>
    </div>
  )
}