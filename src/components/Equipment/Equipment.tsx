import React, { useState } from 'react';
import { EquipProps, AndroidProps } from '@/Types/Equipment';
import useCharacterEquip from "@/hooks/useCharacterItems";
import styles from './equipment.module.css';
import EquipBox from './EquipBox';
import useEquipPotentialGrade from '@/hooks/useEquipGrade';

import { equipmentList } from '@/constant/equipList';

interface EquipmentProps {
  characterEquipment: EquipProps;
  characterAndroid: AndroidProps;
}

export default function Equipment({ characterEquipment, characterAndroid }: EquipmentProps) {
  const equip = useCharacterEquip(characterEquipment, "equip"); // 2번째 인자로 (캐시, 안드로이드, 사용자 장비 구분함)
  const grade = useEquipPotentialGrade(characterEquipment);

  return (
    <div className={styles.equipColumn}>
      <span className={styles.equipSpan}>EQUIPMENT</span>
      <div className={styles.equipmentContainer}>
        {equipmentList.map((equipItem) => (
          <EquipBox 
            key={equipItem.name}
            slotCoordinate={equipItem.slot}
            equipmentImage={equipItem.isAndroid ? characterAndroid?.android_icon : equip[equipItem.name]}
            potentialGrade={equipItem.isAndroid ? undefined : grade[equipItem.name]}
            slotName={equipItem.name}
            partName={equipItem.partName}
          />
        ))}
      </div>
    </div>
  );
}
