// styles
import styles from "./symbol.module.css";

// types
import { SymbolProps } from "@/Types/Symbol";

// components
import SymbolHandler from "./SymbolHandler";
import { useSymbolStore } from "@/store/nav";

interface SymbolsProps {
  characterSymbol: SymbolProps;
}

export default function Symbol({ characterSymbol }: SymbolsProps) {
  const { selected } = useSymbolStore();
  const arcaneSymbols = characterSymbol.symbol.filter(symbol => symbol.symbol_name.includes('아케인심볼'));
  const authenticSymbols = characterSymbol.symbol.filter(symbol => symbol.symbol_name.includes('어센틱심볼'));

  console.log(characterSymbol, " 심볼 정보 ");
  console.log(selected);

  return (
    <div className={styles.symbolMain}>
      <SymbolHandler />
      
      {/* ARCANE 상태일 때만 아케인 심볼 출력 */}
      {selected === "ARCANE" && (
        <div className={styles.symbolContent}>
          <span className={styles.symbolSubSpan}>ARCANE EQUIPMENT</span>
          <div className={styles.symbolSpanDiv}>
            <span className={styles.symbolMainSpan}>ARC + {arcaneSymbols.reduce((acc, symbol) => acc + Number(symbol.symbol_force), 0)}</span>
            <span className={styles.symbolMainSpan}>주스탯 + {arcaneSymbols.reduce((acc, symbol) => acc + Number(symbol.symbol_str), 0)}</span>
          </div>
          <div className={styles.symbolDivContent}>
            {arcaneSymbols.map((symbol, index) => (
              <div key={index} className={styles.symbolDiv}>
                <img src={symbol.symbol_icon} alt={symbol.symbol_name} />
                <span className={styles.symbolLevel}>Lv. {symbol.symbol_level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AUTHENTIC 상태일 때만 어센틱 심볼 출력 */}
      {selected === "AUTHENTIC" && (
        <div className={styles.symbolContent}>
          <span className={styles.symbolSubSpan}>AUTHENTIC EQUIPMENT</span>
          <div className={styles.symbolSpanDiv}>
            <span className={styles.symbolMainSpan}>AUT + {authenticSymbols.reduce((aut, symbol) => aut + Number(symbol.symbol_force), 0)}</span>
            <span className={styles.symbolMainSpan}>주스탯 + {authenticSymbols.reduce((aut, symbol) => aut + Number(symbol.symbol_str), 0)}</span>
          </div>
          <div className={styles.symbolDivContent}>
            {authenticSymbols.map((symbol, index) => (
              <div key={index} className={styles.symbolDiv}>
                <img src={symbol.symbol_icon} alt={symbol.symbol_name} />
                <span className={styles.symbolLevel}>Lv. {symbol.symbol_level}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
