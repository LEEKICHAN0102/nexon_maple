import styles from "./skillNavigation.module.css";
import { useSkillNavStore } from "@/store/nav";

export default function SkillNavigation() {
  const { selected, onSelect } = useSkillNavStore(); // 전역 상태에서 선택된 섹션과 onSelect 함수 가져오기

  return (
    <nav className={styles.navigation}>
      <ul className={styles.uList}>
        <li 
          className={`${styles.listBox} ${selected === "LINK" ? styles.selected : ""}`} 
          onClick={() => onSelect("LINK")}
        >
          <span className={`${styles.listSpan} ${selected === "LINK" ? styles.selectedSpan : ""}`}>링크 스킬</span>
        </li>
        <li 
          className={`${styles.listBox} ${selected === "VMATRIX" ? styles.selected : ""}`} 
          onClick={() => onSelect("VMATRIX")}
        >
          <span className={`${styles.listSpan} ${selected === "VMATRIX" ? styles.selectedSpan : ""}`}>V 매트릭스</span>
        </li>
        <li 
          className={`${styles.listBox} ${selected === "HEXAMATRIX" ? styles.selected : ""}`} 
          onClick={() => onSelect("HEXAMATRIX")}
        >
          <span className={`${styles.listSpan} ${selected === "HEXAMATRIX" ? styles.selectedSpan : ""}`}>HEXA 매트릭스</span>
        </li>
      </ul>
    </nav>
  );
}
