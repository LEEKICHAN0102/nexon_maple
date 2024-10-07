import { SymbolProps } from "@/Types/Symbol"

interface SymbolsProps {
  characterSymbol: SymbolProps;
}

export default function Symbol({ characterSymbol }: SymbolsProps) {
  console.log(characterSymbol, "심볼 데이터");

  const arcaneSymbols = characterSymbol.symbol.filter(symbol => symbol.symbol_name.includes('아케인심볼'));
  const authenticSymbols = characterSymbol.symbol.filter(symbol => symbol.symbol_name.includes('어센틱심볼'));

  return(
    <div>
      <div>
        <button>ARCANE</button>
        <button>AUTHENTIC</button>
      </div>
      <div>
        <span>ARCANE EQUIPMENT</span>
        <div>
          <span>ARC + {arcaneSymbols.reduce((acc, symbol) => acc + Number(symbol.symbol_force), 0)}</span>
          <span>주스탯 + {arcaneSymbols.reduce((acc, symbol) => acc + Number(symbol.symbol_str), 0)}</span>
        </div>
        <div>
          {arcaneSymbols.map((symbol, index) => (
            <div key={index}>
              {/* symbol_icon과 symbol_name 출력 */}
              <img src={symbol.symbol_icon} alt={symbol.symbol_name} />
              <span>Lv {symbol.symbol_level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}