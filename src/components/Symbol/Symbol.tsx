// styles
import styles from "./symbol.module.css";

// types
import { SymbolProps } from "@/Types/Symbol"

interface SymbolsProps {
  characterSymbol: SymbolProps;
}

export default function Symbol({ characterSymbol }: SymbolsProps) {
  console.log(characterSymbol, "심볼 데이터");

  const arcaneSymbols = characterSymbol.symbol.filter(symbol => symbol.symbol_name.includes('아케인심볼'));
  const authenticSymbols = characterSymbol.symbol.filter(symbol => symbol.symbol_name.includes('어센틱심볼'));

  return(
    <div className={styles.symbolMain}>
      <div className={styles.symbolNav}>
        <button className={styles.symbolButton}>ARCANE</button>
        <button className={styles.symbolButton}>AUTHENTIC</button>
      </div>
      <div className={styles.symbolContent}>
        <span className={styles.symbolSubSpan}>ARCANE EQUIPMENT</span>
        <div className={styles.symbolSpanDiv}>
          <span className={styles.symbolMainSpan}>ARC + {arcaneSymbols.reduce((acc, symbol) => acc + Number(symbol.symbol_force), 0)}</span>
          <span className={styles.symbolMainSpan}>주스탯 + {arcaneSymbols.reduce((acc, symbol) => acc + Number(symbol.symbol_str), 0)}</span>
        </div>
        <div className={styles.symbolDivContent}>
          {arcaneSymbols.map((symbol, index) => (
            <div key={index} className={styles.symbolDiv}>
              {/* symbol_icon과 symbol_name 출력 */}
              <img src={symbol.symbol_icon} alt={symbol.symbol_name} />
              <span className={styles.symbolLevel}>Lv. {symbol.symbol_level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}