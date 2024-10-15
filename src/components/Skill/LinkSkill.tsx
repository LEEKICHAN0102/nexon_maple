import styles from "./linkSkill.module.css";
import { LinkProps } from "@/Types/Link";

// import SkillDetail from "../Detail/SkillDetail";

interface CharacterLinkProps {
  characterLink: LinkProps;
}

export default function LinkSkill({ characterLink }: CharacterLinkProps) {
  console.log("캐릭터 링크 보기:", characterLink);

  return(
    <div className={styles.skillMain} draggable={true}>
      <div className={styles.skillGrid}>
        {characterLink.character_link_skill.map((skill, index) => (
          <div key={index} className={styles.skillBox}>
            <div className={styles.imgBox}>
              <img src={skill.skill_icon} alt={skill.skill_name} />
            </div>
            <div className={styles.textBox}>
              <div className={styles.skillName}>{skill.skill_name}</div>
              <span className={styles.skillLevel}>{skill.skill_level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
