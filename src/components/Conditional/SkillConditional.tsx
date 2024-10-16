// styles 
import styles from "./skillConditional.module.css";

// components
import Navigation from "../Navigation/Navigation";
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