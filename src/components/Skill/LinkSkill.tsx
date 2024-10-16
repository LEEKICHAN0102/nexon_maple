import styles from "./linkSkill.module.css";
import { LinkProps, LinkObjectProps } from "@/Types/Link";
import Link from "./Detail/Link";
import { useState } from "react";

interface CharacterLinkProps {
  characterLink: LinkProps;
}

export default function LinkSkill({ characterLink }: CharacterLinkProps) {
  const [selectedLink, setSelectedLink] = useState<LinkObjectProps | null>(null);

  const handleLinkClick = (link: LinkObjectProps) => {
    setSelectedLink((prev) => (prev === link ? null : link));
  };

  return (
    <div className={styles.skillMain} draggable={true}>
      <div className={styles.skillGrid}>
        {characterLink.character_link_skill.map((link, index) => (
          <div key={index} className={styles.skillBox} onClick={() => handleLinkClick(link)}>
            <div className={styles.imgBox}>
              <img src={link.skill_icon} alt={link.skill_name} />
            </div>
            <div className={styles.textBox}>
              <div className={styles.skillName}>{link.skill_name}</div>
              <span className={styles.skillLevel}>{link.skill_level}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 선택된 스킬 정보 표시 */}
      {selectedLink && (
        <div className={styles.skillBoxContainer}>
          <Link characterLink={selectedLink} />
        </div>
      )}
    </div>
  );
}
