import { useState, useEffect } from "react";
import { EquipProps } from "@/@modal/Detail";

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
