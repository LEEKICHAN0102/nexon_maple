// libs
import { useState, useEffect } from "react";

// Extend Props
import { EquipProps } from "@/@modal/Detail";

// 캐릭터 착용 장비의 잠재능력 등급을 받아오는 커스텀 hook
const useEquipPotentialGrade = (characterEquip: EquipProps | undefined) => {
  const [grade, setGrade] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (characterEquip) {
      const equipMap: { [key: string]: string } = {};
      characterEquip.item_equipment.forEach(equip => {
        equipMap[equip.item_equipment_slot] = equip.potential_option_grade;
      });
      setGrade(equipMap);
    }
  }, [characterEquip]);

  return grade;
};

export default useEquipPotentialGrade;
