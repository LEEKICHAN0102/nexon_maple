import { useState } from "react";

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
  const authenticSymbols = characterSymbol.symbol.filter(symbol => symbol.symbol_name.includes('어센틱심볼') && !symbol.symbol_name.includes('그랜드'));
  const grandAuthenticSymbols = characterSymbol.symbol.filter(symbol => symbol.symbol_name.includes('그랜드 어센틱심볼'));

  const [isGrandAuthentic, setIsGrandAuthentic] = useState(false);

  console.log(characterSymbol, "심볼 정보");

  const toggleGrandAuthentic = () => {
    setIsGrandAuthentic((prev) => !prev);
  };

  return (
    <div className={styles.symbolMain}>
      <SymbolHandler />
      
      {/* ARCANE 상태일 때만 아케인 심볼 출력 */}
      {selected === "ARCANE" && (
        <div className={styles.symbolContent}>
          <span className={styles.symbolSubSpan}>ARCANE EQUIPMENT</span>
          <div className={styles.symbolSpanDiv}>
            <span className={styles.symbolMainSpan}>ARC + {arcaneSymbols.reduce((acc, symbol) => acc + Number(symbol.symbol_force), 0)}</span>
            <span className={styles.symbolMainSpan}>주스탯 + {arcaneSymbols.reduce((acc, symbol) => acc + Number(symbol.symbol_str) + Number(symbol.symbol_dex) + Number(symbol.symbol_int) + Number(symbol.symbol_luk), 0)}</span>
          </div>
          <div className={styles.symbolDivContent}>
            {arcaneSymbols.map((symbol, index) => (
              <div key={index} className={styles.symbolDiv}>
                <img src={symbol.symbol_icon} alt={symbol.symbol_name} />
                <span className={styles.symbolLevel}>Lv. {symbol.symbol_level}</span>
                {symbol.symbol_level === 20 ? <span className={styles.symbolGrowth}>MAX</span> : <span className={styles.symbolGrowth}>{symbol.symbol_growth_count} / {symbol.symbol_require_growth_count}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AUTHENTIC 상태일 때만 어센틱 심볼 출력 */}
      {selected === "AUTHENTIC" && (
        <div className={`${styles.symbolContent} ${styles.authenticColor}  ${isGrandAuthentic ? styles.grandAuthenticColor : ''}`}>
          <span className={styles.symbolSubSpan}>AUTHENTIC EQUIPMENT</span>
          <div className={styles.symbolSpanDiv}>
            {isGrandAuthentic ? <span className={styles.symbolMainSpan}>GRD + {grandAuthenticSymbols.reduce((grd, symbol) => grd + Number(symbol.symbol_force), 0)}</span> : <span className={styles.symbolMainSpan}>AUT + {authenticSymbols.reduce((aut, symbol) => aut + Number(symbol.symbol_force), 0)}</span>}
            {isGrandAuthentic ? <span className={styles.symbolMainSpan}>메획,아획 + {grandAuthenticSymbols.map((symbol) => symbol.symbol_drop_rate)}</span> : <span className={styles.symbolMainSpan}>주스탯 + {authenticSymbols.reduce((aut, symbol) => aut + Number(symbol.symbol_str) + Number(symbol.symbol_dex) + Number(symbol.symbol_int) + Number(symbol.symbol_luk), 0)}</span>}
            {isGrandAuthentic && <span className={styles.symbolMainSpan}>경험치 획득량 + {grandAuthenticSymbols.map((symbol) => symbol.symbol_exp_rate)}</span>}
          </div>
          <div className={`${styles.authenticToggle}`} onClick={toggleGrandAuthentic}>
            {isGrandAuthentic ? <span>AUT SYM</span> : <span>GRD AUT</span>}
          </div>
          {isGrandAuthentic ? <div className={styles.symbolDivContent}>
            {grandAuthenticSymbols.map((symbol, index) => (
              <div key={index} className={styles.authenticSymbolDiv}>
                <img src={symbol.symbol_icon} alt={symbol.symbol_name} />
                <span className={styles.symbolLevel}>Lv. {symbol.symbol_level}</span>
                {symbol.symbol_level === 11 ? <span className={styles.symbolGrowth}>MAX</span> : <span className={styles.symbolGrowth}>{symbol.symbol_growth_count} / {symbol.symbol_require_growth_count}</span>}
              </div>
            ))}
          </div> : <div className={styles.symbolDivContent}>
            {authenticSymbols.map((symbol, index) => (
              <div key={index} className={styles.authenticSymbolDiv}>
                <img src={symbol.symbol_icon} alt={symbol.symbol_name} />
                <span className={styles.symbolLevel}>Lv. {symbol.symbol_level}</span>
                {symbol.symbol_level === 11 ? <span className={styles.symbolGrowth}>MAX</span> : <span className={styles.symbolGrowth}>{symbol.symbol_growth_count} / {symbol.symbol_require_growth_count}</span>}
              </div>
            ))}
          </div> }
        </div>
      )}
    </div>
  );
}
