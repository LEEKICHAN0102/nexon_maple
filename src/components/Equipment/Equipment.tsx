import React, { useState } from 'react';
import { EquipProps, AndroidProps } from '@/Types/Equipment';
import useCharacterEquip from "@/hooks/useCharacterItems";
import styles from './equipment.module.css';
import EquipBox from './EquipBox';
import useEquipPotentialGrade from '@/hooks/useEquipGrade';
import { equipmentList } from '@/constant/equipList';
import EquipStatBox from './EquipStatBox';

interface EquipmentProps {
  characterEquipment: EquipProps;
  characterAndroid: AndroidProps;
}

export default function Equipment({ characterEquipment, characterAndroid }: EquipmentProps) {
  const [selectedEquip, setSelectedEquip] = useState<number | null>(null); // 클릭된 장비의 인덱스를 저장
  const equip = useCharacterEquip(characterEquipment, "equip");
  const grade = useEquipPotentialGrade(characterEquipment);

  const handleEquipClick = (index: number) => {
    setSelectedEquip(prevIndex => (prevIndex === index ? null : index));
  };

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
            onClick={() => equipItem.equipNum !== undefined && handleEquipClick(equipItem.equipNum)}
          />
        ))}
      </div>

      {/* 클릭된 장비의 정보만 표시 */}
      {selectedEquip !== null && (
        <div className={styles.statBoxContainer}>
          <EquipStatBox characterEquipment={characterEquipment.item_equipment[selectedEquip]} />
        </div>
      )}
    </div>
  );
}
