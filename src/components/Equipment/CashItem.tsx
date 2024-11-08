import { useState } from "react";

import styles from "./cashItem.module.css";
import EquipBox from "./EquipBox";
import { CashProps } from "@/Types/CashItem";
import useCharacterItems from "@/hooks/useCharacterItems";
import { cashItemList } from "@/constants/equipList";
import CashHandler from "./CashHandler";
import { useCashStore } from "@/store/nav";
import CashStatBox from "./CashStatBox";
import { BeautyProps } from "@/Types/Beauty";
import BeautyBox from "./BeautyBox";

interface CashItemProps {
  characterCash: CashProps;
  characterBeauty: BeautyProps;
}

export default function CashItem({ characterCash, characterBeauty }: CashItemProps) {
  const { selected } = useCashStore();
  const cash = useCharacterItems(characterCash, "cash");
  const presetNumber = characterCash.preset_no;
  const preset = useCharacterItems(characterCash, "cash", presetNumber);
  const [selectedCash, setSelectedCash] = useState<string | null>(null);
  const [selectedBeauty, setSelectedBeauty] = useState<string | null>(null);
  
  const handleBeautyClick = (beautyName: string) => {
    setSelectedBeauty(prevBeauty => (prevBeauty === beautyName ? null : beautyName));
    setSelectedCash(null);
  };

  const handleCashClick = (cashName: string) => {
    setSelectedCash(prevCash => (prevCash === cashName ? null : cashName));
  };

  const selectedCashItem = selectedCash
  ? selected === "CASH"
    ? characterCash.cash_item_equipment_base.find(
        (item) => item.cash_item_equipment_slot === selectedCash
      )
    : presetNumber === 1
    ? characterCash.cash_item_equipment_preset_1.find(
        (item) => item.cash_item_equipment_slot === selectedCash
      )
    : presetNumber === 2
    ? characterCash.cash_item_equipment_preset_2.find(
        (item) => item.cash_item_equipment_slot === selectedCash
      )
    : presetNumber === 3
    ? characterCash.cash_item_equipment_preset_3.find(
        (item) => item.cash_item_equipment_slot === selectedCash
      )
    : null
  : null;

  const handleEquipBoxClick = (slotName: string) => {
    if (["헤어", "피부", "얼굴"].includes(slotName)) {
      handleBeautyClick(slotName);
    } else {
      handleCashClick(slotName);
    }
  };

  return (
    <div className={styles.cashColumn}>
      <CashHandler />
      {selected === "CASH" && 
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
                isCursor={true}
                onClick={() => handleEquipBoxClick(item.name)}
              />
            );
          })}
        </div>}

      {selected === "PRESET" && 
        <div className={styles.cashContainer}>
          {cashItemList.map((item) => {
            const equipmentImage = preset[item.name] || item.icon || "";

            return (
              <EquipBox
                key={item.name}
                slotCoordinate={styles[`slot-${item.slot}`]} // 각 슬롯에 맞는 스타일 클래스
                equipmentImage={equipmentImage || ""}
                slotName={item.name}
                partName={item.partName}
                isCursor={true}
                onClick={() => handleEquipBoxClick(item.name)}
              />
            );
          })}
        </div>}

      {/* 선택된 장비 정보가 있을 때만 EquipStatBox 렌더링 */}
      {selectedCashItem ? (
        <div className={styles.cashBoxContainer}>
          <CashStatBox characterCash={selectedCashItem} />
        </div>
      ) : (
        selectedCash && null
      )}

      {selectedBeauty && characterBeauty && (
        <div className={styles.beautyBoxContainer}>
          <BeautyBox characterBeauty={characterBeauty} selectedBeauty={selectedBeauty} />
        </div>
      )}

    </div>
  );
}
