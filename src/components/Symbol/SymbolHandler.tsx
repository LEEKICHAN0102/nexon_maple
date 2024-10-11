import styles from "./symbol.module.css";

import { useSymbolStore } from "@/store/nav";

export default function SymbolHandler() {
  const { selected, onSelect } = useSymbolStore();

  return(
    <div className={styles.symbolNav}>
      <button
        className={`${styles.leftButton} ${selected === "ARCANE" ? styles.selected : ""}`}
        onClick={() => onSelect("ARCANE")}
      >ARCANE</button>
      <button 
        className={`${styles.rightButton} ${selected === "AUTHENTIC" ? styles.selected : ""}`}
        onClick={() => onSelect("AUTHENTIC")}
      >AUTHENTIC</button>
    </div>
  )
}