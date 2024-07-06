import React from 'react';
import { EquipProps, AndroidProps } from "@/@modal/Detail";
import useCharacterEquip from "@/hooks/useCharacterEquip";
import styles from './equipment.module.css';
import EquipBox from './EquipBox';

interface EquipmentProps {
  characterEquipment: EquipProps;
  characterAndroid: AndroidProps;
}

export default function Equipment ({ characterEquipment, characterAndroid }: EquipmentProps) {
  const equip = useCharacterEquip(characterEquipment);

  return (
    <div className={styles.equipmentContainer}>
      <EquipBox 
        equipmentSlot={styles.equipmentSlot}
        slotCoordinate={styles['slot-1']}
        equipmentImage={equip["반지4"]}
        altImage={"반지4"}
      />
      <div className={`${styles.equipmentSlot} ${styles['slot-2']}`}>
        <img src={`${equip["모자"]}`} alt="모자" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-3']}`}>
        <img src={`${equip["엠블렘"]}`} alt="엠블렘" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-4']}`}>
        <img src={`${equip["반지3"]}`} alt="반지3" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-5']}`}>
        <img src={`${equip["펜던트2"]}`} alt="펜던트2" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-6']}`}>
        <img src={`${equip["얼굴장식"]}`} alt="얼굴장식" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-7']}`}>
        <img src={`${equip["뱃지"]}`} alt="뱃지" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-8']}`}>
        <img src={`${equip["반지2"]}`} alt="반지2" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-9']}`}>
        <img src={`${equip["펜던트"]}`} alt="펜던트" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-10']}`}>
        <img src={`${equip["눈장식"]}`} alt="눈장식" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-11']}`}>
        <img src={`${equip["귀고리"]}`} alt="귀고리" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-12']}`}>
        <img src={`${equip["훈장"]}`} alt="훈장" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-13']}`}>
        <img src={`${equip["반지1"]}`} alt="반지1" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-14']}`}>
        <img src={`${equip["무기"]}`} alt="무기" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-15']}`}>
        <img src={`${equip["상의"]}`} alt="상의" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-16']}`}>
        <img src={`${equip["어깨장식"]}`} alt="어깨장식" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-17']}`}>
        <img src={`${equip["보조무기"]}`} alt="보조무기" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-18']}`}>
        <img src={`${equip["포켓 아이템"]}`} alt="포켓 아이템" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-19']}`}>
        <img src={`${equip["벨트"]}`} alt="벨트" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-20']}`}>
        <img src={`${equip["하의"]}`} alt="하의" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-21']}`}>
        <img src={`${equip["장갑"]}`} alt="장갑" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-22']}`}>
        <img src={`${equip["망토"]}`} alt="망토" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-23']}`}>
        <img src={`${equip["신발"]}`} alt="신발" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-24']}`}>
        <img src={`${characterAndroid.android_icon}`} alt="안드로이드" />
      </div>
      <div className={`${styles.equipmentSlot} ${styles['slot-25']}`}>
        <img src={`${equip["기계 심장"]}`} alt="기계 심장" />
      </div>
    </div>
  );
}
