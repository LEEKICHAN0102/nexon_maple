import styles from "../linkSkill.module.css";
import { LinkObjectProps } from "@/Types/Link";

interface LinkDetailProps {
  characterLink: LinkObjectProps;
}

export default function Link({ characterLink }: LinkDetailProps) {
  return (
    <div className={styles.detailLinkBox}>
      <span className={styles.linkName}>{characterLink.skill_name}</span>
      <div className={styles.imgText}>
        <img src={characterLink.skill_icon} alt={characterLink.skill_name} />
        {/* skill_description에서 줄바꿈을 <br />로 대체 */}
        <span>
          {characterLink.skill_description.split("\r\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.mainText}>
        <span>[현재 레벨 {characterLink.skill_level}]</span>
        {/* skill_effect에서도 줄바꿈을 <br />로 대체 */}
        <span>
          {characterLink.skill_effect.split("\n").map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </span>
        {characterLink.skill_effect_next ? (
          <>
            <span>[다음 레벨 {characterLink.skill_level+1} ]</span>
            <span>
              {characterLink.skill_effect_next.split("\n").map((line, index) => (
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
