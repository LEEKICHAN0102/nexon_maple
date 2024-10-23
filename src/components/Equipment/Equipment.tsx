import React, { useState } from 'react';
import { EquipProps, AndroidProps } from '@/Types/Equipment';
import styles from './equipment.module.css';
import EquipBox from './EquipBox';
import useEquipPotentialGrade from '@/hooks/useEquipGrade';
import { equipmentList } from '@/constants/equipList';
import useCharacterItems from '@/hooks/useCharacterItems';
import EquipStatBox from './EquipStatBox';

interface EquipmentProps {
  characterEquipment: EquipProps;
  characterAndroid: AndroidProps;
}

export default function Equipment({ characterEquipment, characterAndroid }: EquipmentProps) {
  const [selectedEquip, setSelectedEquip] = useState<string | null>(null);
  const equip = useCharacterItems(characterEquipment, "equip");
  const grade = useEquipPotentialGrade(characterEquipment);

  const handleEquipClick = (equipName: string) => {
    setSelectedEquip(prevEquip => (prevEquip === equipName ? null : equipName));
  };

  // 선택된 장비 정보를 찾아 변수에 저장
  const selectedEquipment = selectedEquip
    ? characterEquipment.item_equipment.find(
        (item) => item.item_equipment_slot === selectedEquip
      )
    : null;

  return (
    <div className={styles.equipColumn}>
      <span className={styles.equipSpan}>EQUIPMENT</span>
      <div className={styles.equipmentContainer}>
        {equipmentList.map((equipItem) => {
          const currentEquip = equipItem.isAndroid 
            ? characterAndroid?.android_icon 
            : equipItem.partName;

          return (
            <EquipBox 
              key={equipItem.name}
              slotCoordinate={styles[`slot-${equipItem.slot}`]}
              equipmentImage={equipItem.isAndroid ? currentEquip : equip[equipItem.name] || ""}
              potentialGrade={grade[equipItem.name]}
              slotName={equipItem.name}
              partName={equipItem.partName}
              isCursor={true}
              onClick={() => handleEquipClick(equipItem.name)}
            />
          );
        })}
      </div>

      {/* 선택된 장비 정보가 있을 때만 EquipStatBox 렌더링 */}
      {selectedEquipment ? (
        <div className={styles.statBoxContainer}>
          <EquipStatBox characterEquipment={selectedEquipment} />
        </div>
      ) : (
        selectedEquip && null
      )}
    </div>
  );
}