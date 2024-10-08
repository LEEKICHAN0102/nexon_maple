import styles from "./navigation.module.css";
import useNavStore from "@/store/nav";

export default function Navigation() {
  const { selected, onSelect } = useNavStore(); // 전역 상태에서 선택된 섹션과 onSelect 함수 가져오기

  return (
    <nav className={styles.navigation}>
      <ul className={styles.uList}>
        <li 
          className={`${styles.listBox} ${selected === "STAT" ? styles.selected : ""}`} 
          onClick={() => onSelect("STAT")}
        >
          STAT
        </li>
        <li 
          className={`${styles.listBox} ${selected === "EQUIP" ? styles.selected : ""}`} 
          onClick={() => onSelect("EQUIP")}
        >
          EQUIP
        </li>
        <li 
          className={`${styles.listBox} ${selected === "SKILL" ? styles.selected : ""}`} 
          onClick={() => onSelect("SKILL")}
        >
          SKILL
        </li>
        <li className={styles.listBox}>CASH</li>
      </ul>
    </nav>
  );
}
