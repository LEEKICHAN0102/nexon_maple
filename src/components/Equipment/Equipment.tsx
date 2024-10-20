import React, { useState } from 'react';
import { EquipProps, AndroidProps } from '@/Types/Equipment';
import styles from './equipment.module.css';
import EquipBox from './EquipBox';
import useEquipPotentialGrade from '@/hooks/useEquipGrade';
import { equipmentList } from '@/constants/equipList';
import EquipStatBox from './EquipStatBox';

interface EquipmentProps {
  characterEquipment: EquipProps;
  characterAndroid: AndroidProps;
}

export default function Equipment({ characterEquipment, characterAndroid }: EquipmentProps) {
  const [selectedEquip, setSelectedEquip] = useState<number | null>(null);
  const grade = useEquipPotentialGrade(characterEquipment);

  const handleEquipClick = (equipNum: number) => {
    setSelectedEquip(prevEquip => (prevEquip === equipNum ? null : equipNum));
  };

  // `item_equipment_slot`을 키로 사용해 슬롯에 맞는 장비 찾기
  const equipMap = characterEquipment.item_equipment.reduce((acc, item, index) => {
    acc[item.item_equipment_slot] = { ...item, equipNum: index };
    return acc;
  }, {} as Record<string, typeof characterEquipment.item_equipment[0]>);

  return (
    <div className={styles.equipColumn}>
      <span className={styles.equipSpan}>EQUIPMENT</span>
      <div className={styles.equipmentContainer}>
        {equipmentList.map((equipItem) => {
          const currentEquip = equipItem.isAndroid 
            ? characterAndroid?.android_icon 
            : equipMap[equipItem.name]?.item_icon; // name과 slot이 일치하는지 확인

          const potentialGrade = equipItem.isAndroid 
            ? undefined 
            : grade[equipItem.name];

          const equipNum = equipMap[equipItem.name]?.equipNum;
          
          return (
            <EquipBox 
              key={equipItem.name}
              slotCoordinate={styles[`slot-${equipItem.slot}`]}
              equipmentImage={currentEquip || ""}
              potentialGrade={potentialGrade}
              slotName={equipItem.name}
              partName={equipItem.partName}
              isCursor={true}
              onClick={() => currentEquip && handleEquipClick(equipNum)}
            />
          );
        })}
      </div>

      {/* 클릭된 장비의 정보만 표시 */}
      {selectedEquip !== null && (
        <div className={styles.statBoxContainer}>
          {/* equipNum을 기반으로 장비 정보 찾기 */}
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