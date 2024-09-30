import React, { useState } from 'react';
import { EquipProps, AndroidProps } from "@/components/Detail/Detail";
import useCharacterEquip from "@/hooks/useCharacterEquip";
import styles from './equipment.module.css';
import EquipBox from './EquipBox';
import EquipStatBox from './EquipStatBox';
import useEquipPotentialGrade from '@/hooks/useEquipGrade';

interface EquipmentProps {
  characterEquipment: EquipProps;
  characterAndroid: AndroidProps;
}

const defaultEquipData = {
  star: "5",
  properties: ["Property 1", "Property 2"],
  imageUrl: "https://example.com/equipImage.jpg",
  altText: "Equipment Image",
  category: "Ring",
  potentials: ["Potential 1", "Potential 2", "Potential 3"],
  additionalPotentials: ["Additional Potential 1", "Additional Potential 2", "Additional Potential 3"],
};

export default function Equipment({ characterEquipment, characterAndroid }: EquipmentProps) {
  const equip = useCharacterEquip(characterEquipment);
  const grade = useEquipPotentialGrade(characterEquipment);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.equipmentContainer}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseDown={handleMouseLeave}
      >
        <EquipBox 
          slotCoordinate={styles['slot-1']}
          equipmentImage={equip["반지4"]}
          potentialGrade={grade["반지4"]}
          altImage={"반지4"}
        />
        {isHovered && <EquipStatBox data={defaultEquipData} />}
      </div>
      <EquipBox 
        slotCoordinate={styles['slot-2']}
        equipmentImage={equip["모자"]}
        potentialGrade={grade["모자"]}
        altImage={"모자"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-3']}
        equipmentImage={equip["엠블렘"]}
        potentialGrade={grade["엠블렘"]}
        altImage={"엠블렘"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-4']}
        equipmentImage={equip["반지3"]}
        potentialGrade={grade["반지3"]}
        altImage={"반지3"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-5']}
        equipmentImage={equip["펜던트2"]}
        potentialGrade={grade["펜던트2"]}
        altImage={"펜던트2"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-6']}
        equipmentImage={equip["얼굴장식"]}
        potentialGrade={grade["얼굴장식"]}
        altImage={"얼굴장식"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-7']}
        equipmentImage={equip["뱃지"]}
        potentialGrade={grade["뱃지"]}
        altImage={"뱃지"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-8']}
        equipmentImage={equip["반지2"]}
        potentialGrade={grade["반지2"]}
        altImage={"반지2"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-9']}
        equipmentImage={equip["펜던트"]}
        potentialGrade={grade["펜던트"]}
        altImage={"펜던트"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-10']}
        equipmentImage={equip["눈장식"]}
        potentialGrade={grade["눈장식"]}
        altImage={"눈장식"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-11']}
        equipmentImage={equip["귀고리"]}
        potentialGrade={grade["귀고리"]}
        altImage={"귀고리"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-12']}
        equipmentImage={equip["훈장"]}
        potentialGrade={grade["훈장"]}
        altImage={"훈장"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-13']}
        equipmentImage={equip["반지1"]}
        potentialGrade={grade["반지1"]}
        altImage={"반지1"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-14']}
        equipmentImage={equip["무기"]}
        potentialGrade={grade["무기"]}
        altImage={"무기"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-15']}
        equipmentImage={equip["상의"]}
        potentialGrade={grade["상의"]}
        altImage={"상의"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-16']}
        equipmentImage={equip["어깨장식"]}
        potentialGrade={grade["어깨장식"]}
        altImage={"어깨장식"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-17']}
        equipmentImage={equip["보조무기"]}
        potentialGrade={grade["보조무기"]}
        altImage={"보조무기"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-18']}
        equipmentImage={equip["포켓 아이템"]}
        altImage={"포켓 아이템"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-19']}
        equipmentImage={equip["벨트"]}
        potentialGrade={grade["벨트"]}
        altImage={"벨트"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-20']}
        equipmentImage={equip["하의"]}
        potentialGrade={grade["하의"]}
        altImage={"하의"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-21']}
        equipmentImage={equip["장갑"]}
        potentialGrade={grade["장갑"]}
        altImage={"장갑"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-22']}
        equipmentImage={equip["망토"]}
        potentialGrade={grade["망토"]}
        altImage={"망토"}
      />
      <EquipBox 
        slotCoordinate={styles['slot-23']}
        equipmentImage={equip["신발"]}
        potentialGrade={grade["신발"]}
        altImage={"신발"}
      />
      <EquipBox
        slotCoordinate={styles['slot-24']}
        equipmentImage={characterAndroid.android_icon}
        altImage={"안드로이드"}
      />
      <EquipBox
        slotCoordinate={styles['slot-25']}
        equipmentImage={equip["기계 심장"]}
        potentialGrade={grade["기계 심장"]}
        altImage={"기계 심장"}
      />
    </div>
  );
}
