// styles 
import styles from "./skillConditional.module.css";

// store
import useOcid from "@/store/ocid";

// queries
import { useLinkQuery } from "@/hooks/apis/useLinkQuery"
import { useVQuery } from "@/hooks/apis/useVQuery";
import { useHexaQuery } from "@/hooks/apis/useHexaQuery";

// components
import LinkSkill from "../Skill/LinkSkill";
import Navigation from "../Navigation/Navigation";
import VMatrix from "../Skill/VMatrix";
import HexaMatrix from "../Skill/HexaMatrix";
import SkillNavigation from "../Navigation/SkillNavigation";
import SkillDetail from "../Detail/SkillDetail";

export default function SkillConditional() {
  return(
    <main className={styles.skillMain}>
      <div className={styles.skillContent}>
        <div className={styles.skillNav}>
          <Navigation />
          <div className={styles.skillCharacter}>
            <SkillNavigation />
            <SkillDetail />
          </div>
        </div>
      </div>
    </main>
  )
}