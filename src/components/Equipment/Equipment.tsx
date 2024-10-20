import React, { useState } from 'react';
import { EquipProps, AndroidProps } from '@/Types/Equipment';
import styles from './equipment.module.css';
import EquipBox from './EquipBox';
import useEquipPotentialGrade from '@/hooks/useEquipGrade';
import useCharacterItems from '@/hooks/useCharacterItems';
import { equipmentList } from '@/constants/equipList';
import EquipStatBox from './EquipStatBox';

interface EquipmentProps {
  characterEquipment: EquipProps;
  characterAndroid: AndroidProps;
}

export default function Equipment({ characterEquipment, characterAndroid }: EquipmentProps) {
  const [selectedEquip, setSelectedEquip] = useState<number | null>(null);
  const equip = useCharacterItems(characterEquipment,"equip")
  const grade = useEquipPotentialGrade(characterEquipment);

  console.log(characterEquipment, "장비 정보");

  const handleEquipClick = (equipNum: number) => {
    setSelectedEquip(prevEquip => (prevEquip === equipNum ? null : equipNum));
  };

  return (
    <div className={styles.equipColumn}>
      <span className={styles.equipSpan}>EQUIPMENT</span>
      <div className={styles.equipmentContainer}>
        {equipmentList.map((equipItem, index) => {
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
              onClick={() => handleEquipClick(index)}
            />
          );
        })}
      </div>

      {/* 클릭된 장비의 정보만 표시 */}
      {selectedEquip !== null && (
        <div className={styles.statBoxContainer}>
          {/* 선택된 슬롯을 통해 characterEquipment에서 올바른 장비 정보 접근 */}
          {characterEquipment.item_equipment[selectedEquip] ? (
            <EquipStatBox characterEquipment={characterEquipment.item_equipment[selectedEquip]} />
          ) : (
            <p>해당 장비 정보가 없습니다.</p> // 예외 처리
          )}
        </div>
      )}
    </div>
  );
}
