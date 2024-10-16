import { useState } from "react";

import styles from "./linkSkill.module.css";

import { HexaProps, HexaObjectProps } from "@/Types/Hexa";
import Hexa from "./Detail/Hexa";

interface CharacterHexaProps {
  characterHexa: HexaProps
}

export default function HexaMatrix({ characterHexa }: CharacterHexaProps) {
  const [selectedHexa, setSelectedHexa] = useState<HexaObjectProps | null>(null);

  console.log(characterHexa);

  const handleHexaClick = (hexa: HexaObjectProps) => {
    setSelectedHexa((prev) => (prev === hexa ? null : hexa));
  };

  return(
    <div className={styles.skillMain}>
      <div className={styles.skillGrid}>
        {characterHexa.character_skill.map((hexa, index) => (
          <div key={index} className={styles.skillBox} onClick={() => handleHexaClick(hexa)}>
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

      {/* 선택된 스킬 정보 표시 */}
      {selectedHexa && (
      <div className={styles.skillBoxContainer}>
        <Hexa characterHexa={selectedHexa} />
      </div>
      )}
    </div>
  )
}