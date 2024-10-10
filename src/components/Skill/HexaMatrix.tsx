import styles from "./linkSkill.module.css";

import { HexaProps } from "@/Types/Hexa";

interface CharacterHexaProps {
  characterHexa: HexaProps
}

export default function HexaMatrix({ characterHexa }: CharacterHexaProps) {
  console.log("HEXA 매트릭스", characterHexa);

  return(
    <div className={styles.skillMain}>
      <div className={styles.skillGrid}>
        {characterHexa.character_skill.map((hexa, index) => (
          <div key={index} className={styles.skillBox}>
            <div className={styles.imgBox}>
              <img src={hexa.skill_icon} alt={hexa.skill_name} /> 
            </div>
            <div className={styles.textBox}>
              <div className={styles.skillName}>{hexa.skill_name}</div>
              <span className={styles.skillLevel}>{hexa.skill_level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}