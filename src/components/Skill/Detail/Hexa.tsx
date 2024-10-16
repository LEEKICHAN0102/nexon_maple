import { HexaObjectProps } from "@/Types/Hexa";
import styles from "../linkSkill.module.css";

interface HexaProps {
  characterHexa: HexaObjectProps;
}

export default function Hexa({ characterHexa }: HexaProps) {
  return (
    <div className={styles.detailLinkBox}>
      <span className={styles.linkName}>{characterHexa.skill_name}</span>
      <div className={styles.imgText}>
        <img src={characterHexa.skill_icon} alt={characterHexa.skill_name} />
        <span>
          {characterHexa.skill_description.split("\r\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.mainText}>
        <span>[현재 레벨 {characterHexa.skill_level} ]</span>
        <span>
          {characterHexa.skill_effect.split("\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </span>
        {characterHexa.skill_effect_next ? (
          <>
            <span>[다음 레벨 {characterHexa.skill_level+1} ]</span>
            <span>
              {characterHexa.skill_effect_next.split("\n").map((line, index) => (
                <p key={index}>
                  {line}
                  <br />
                </p>
              ))}
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
}