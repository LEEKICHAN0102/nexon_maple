// libs
import { useState, useEffect } from "react";

// Extend Props
import { CashProps } from "@/Types/CashItem";

// 캐릭터 착용 캐시 장비의 형태 아이콘을 받아오는 커스텀 hook
const useCharacterCash = (characterCash: CashProps | undefined) => {
  const [cash, setCash] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (characterCash) {
      const cashMap: { [key: string]: string } = {};
      characterCash.cash_item_equipment_base.forEach(cash => {
        cashMap[cash.cash_item_equipment_slot] = cash.cash_item_icon;
      });
      setCash(cashMap);
    }
  }, [characterCash]);

  return cash;
};

export default useCharacterCash;
