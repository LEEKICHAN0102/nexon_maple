import styles from "./cashItem.module.css";
import EquipBox from "./EquipBox";
import { CashProps } from "@/Types/CashItem";
import useCharacterItems from "@/hooks/useCharacterItems";
import { cashItemList } from "@/constants/equipList";

interface CashItemProps {
  characterCash: CashProps;
}

export default function CashItem({ characterCash }: CashItemProps) {
  const cash = useCharacterItems(characterCash, "cash");

  return (
    <div className={styles.cashColumn}>
      <span className={styles.cashSpan}>CASH ITEM</span>
      <div className={styles.cashContainer}>
        {cashItemList.map((item) => {
          const equipmentImage = cash[item.name] || item.icon || "";

          return (
            <EquipBox
              key={item.name}
              slotCoordinate={styles[`slot-${item.slot}`]} // 각 슬롯에 맞는 스타일 클래스
              equipmentImage={equipmentImage || ""}
              slotName={item.name}
              partName={item.partName}
            />
          );
        })}
      </div>
    </div>
  );
}
