// libs
import { useState, useEffect } from "react";

// Extend Props
import { EquipProps } from "@/components/Detail/Detail";

// 캐릭터 착용 장비의 형태 아이콘을 받아오는 커스텀 hook
const useCharacterEquip = (characterEquip: EquipProps | undefined) => {
  const [equip, setEquip] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (characterEquip) {
      const equipMap: { [key: string]: string } = {};
      characterEquip.item_equipment.forEach(equip => {
        equipMap[equip.item_equipment_slot] = equip.item_shape_icon;
      });
      setEquip(equipMap);
    }
  }, [characterEquip]);

  return equip;
};

export default useCharacterEquip;
