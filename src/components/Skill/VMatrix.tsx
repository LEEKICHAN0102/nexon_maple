import styles from "./linkSkill.module.css";

import { VProps } from "@/Types/VMatrix"

interface CharacterVProps {
  characterV: VProps
}

export default function VMatrix({ characterV }: CharacterVProps) {
  // 메인 V매트릭스 부터 출력을 위한 배열 reverse()
  const rCharacterV = [...characterV.character_skill].reverse();

  console.log(rCharacterV, "5차");
  
  return(
    <div className={styles.skillMain}>
      <div className={styles.skillGrid}>
        {rCharacterV.map((v, index) => (
          <div key={index} className={styles.skillBox}>
            <div className={styles.imgBox}>
              <img src={v.skill_icon} alt={v.skill_name} /> 
            </div>
            <div className={styles.textBox}>
              <div className={styles.skillName}>{v.skill_name}</div>
              <span className={styles.skillLevel}>{v.skill_level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}