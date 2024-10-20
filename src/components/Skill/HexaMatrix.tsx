import { useState } from "react";
import styles from "./linkSkill.module.css";
import { HexaProps, HexaObjectProps, HexaStatProps } from "@/Types/Hexa";
import Hexa from "./Detail/Hexa";
import HexaStat from "./Detail/HexaStat";

interface CharacterHexaProps {
  characterHexa: HexaProps;
  characterHexaStat: HexaStatProps;
}

export default function HexaMatrix({ characterHexa, characterHexaStat }: CharacterHexaProps) {
  const [selectedHexa, setSelectedHexa] = useState<HexaObjectProps | null>(null);
  const [selectedHexaStat, setSelectedHexaStat] = useState<HexaStatProps | null>(null);

  const handleHexaClick = (hexa: HexaObjectProps) => {
    setSelectedHexa((prev) => (prev === hexa ? null : hexa));
  };

  const handleHexaStatClick = () => {
    setSelectedHexaStat((prev) => (prev ? null : characterHexaStat));
  };

  return (
    <div className={styles.skillMain}>
      <div className={styles.skillGrid}>
        {characterHexa.character_skill.map((hexa, index) => (
          <div
            key={index}
            className={styles.skillBox}
            onClick={() => {
              if (hexa.skill_name === "HEXA 스탯") {
                handleHexaStatClick();
              } else {
                handleHexaClick(hexa);
              }
            }}
          >
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

      {selectedHexa && (
        <div className={styles.skillBoxContainer}>
          <Hexa characterHexa={selectedHexa} />
        </div>
      )}

      {selectedHexaStat && (
        <div className={styles.statBoxContainer}>
          <HexaStat characterHexaStat={selectedHexaStat} />
        </div>
      )}
    </div>
  );
}
