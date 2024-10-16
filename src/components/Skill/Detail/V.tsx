import { VObjectProps } from "@/Types/VMatrix";
import styles from "../linkSkill.module.css";

interface VMatrixProps {
  characterV: VObjectProps;
}

export default function V({ characterV }: VMatrixProps) {
  return (
    <div className={styles.detailLinkBox}>
      <span className={styles.linkName}>{characterV.skill_name}</span>
      <div className={styles.imgText}>
        <img src={characterV.skill_icon} alt={characterV.skill_name} />
        <span>
          {characterV.skill_description.split("\r\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.mainText}>
        <span>[현재 레벨 {characterV.skill_level} ]</span>
        <span>
          {characterV.skill_effect.split("\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </span>
        {characterV.skill_effect_next ? (
          <>
            <span>[다음 레벨 {characterV.skill_level+1} ]</span>
            <span>
              {characterV.skill_effect_next.split("\n").map((line, index) => (
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