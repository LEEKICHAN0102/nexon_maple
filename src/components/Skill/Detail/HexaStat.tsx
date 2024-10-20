import { HexaStatProps } from "@/Types/Hexa";
import HexaStatProgress from "./HexaStatProgress"; // HexaStatProgress 추가
import styles from "../linkSkill.module.css";

interface HSProps {
  characterHexaStat: HexaStatProps;
}

export default function HexaStat({ characterHexaStat }: HSProps) {
  return (
    <div className={styles.hexaStatBox}>
      {Array.isArray(characterHexaStat.character_hexa_stat_core) && characterHexaStat.character_hexa_stat_core.length > 0 && (
        <>
          <span className={styles.hexaSpan}>HEXA STAT 1</span>
          <div className={styles.divider}></div>
          <div>
            {characterHexaStat.character_hexa_stat_core.map((stat) => (
              <HexaStatProgress key={stat.slot_id} stat={stat} />
            ))}
          </div>
        </>
      )}

      {Array.isArray(characterHexaStat.character_hexa_stat_core_2) && characterHexaStat.character_hexa_stat_core_2.length > 0 && (
        <>
          <span className={styles.hexaSpan}>HEXA STAT 2</span>
          <div className={styles.divider}></div>
          <div>
            {characterHexaStat.character_hexa_stat_core_2.map((stat_2) => (
              <HexaStatProgress key={stat_2.slot_id} stat={stat_2} />
            ))}
          </div>
        </>  
      )}
    </div>
  );
}