import { useState } from "react";

import styles from "./linkSkill.module.css";

import { VProps, VObjectProps } from "@/Types/VMatrix"
import V from "./Detail/V";

interface CharacterVProps {
  characterV: VProps
}

export default function VMatrix({ characterV }: CharacterVProps) {
  // 메인 V매트릭스 부터 출력을 위한 배열 reverse()
  const rCharacterV = [...characterV?.character_skill].reverse();
  const [selectedV, setSelectedV] = useState<VObjectProps | null>(null);

  const handleLinkClick = (v: VObjectProps) => {
    setSelectedV((prev) => (prev === v ? null : v));
  };
  
  return(
    <div className={styles.skillMain}>
      <div className={styles.skillGrid}>
        {rCharacterV.map((v, index) => (
          <div key={index} className={styles.skillBox} onClick={() => handleLinkClick(v)}>
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

      {/* 선택된 스킬 정보 표시 */}
      {selectedV && (
        <div className={styles.skillBoxContainer}>
          <V characterV={selectedV} />
        </div>
      )}
    </div>
  )
}