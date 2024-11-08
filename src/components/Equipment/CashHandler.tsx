import styles from "../Symbol/symbol.module.css";

import { useCashStore } from "@/store/nav";

export default function CashHandler() {
  const { selected, onSelect } = useCashStore();

  return(
    <div className={styles.symbolNav}>
      <button
        className={`${styles.leftButton} ${selected === "CASH" ? styles.selected : ""}`}
        onClick={() => onSelect("CASH")}
      >CASH ITEM</button>
      <button 
        className={`${styles.rightButton} ${selected === "PRESET" ? styles.selected : ""}`}
        onClick={() => onSelect("PRESET")}
      >PRESET</button>
    </div>
  )
}