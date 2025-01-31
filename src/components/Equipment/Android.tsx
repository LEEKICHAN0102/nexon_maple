import styles from "./android.module.css";
import EquipBox from "./EquipBox";

import { AndroidProps } from "@/Types/Android";
import { androidItemList } from "@/constants/equipList";
import useCharacterItems from "@/hooks/useCharacterItems";
import { useState } from "react";

import AndroidEquipBox from "./AndroidEquipBox";
import AndroidBeautyBox from "./AndroidBeautyBox";

interface CharacterAndroidProps {
  characterAndroid: AndroidProps;
}


export default function Android({ characterAndroid }: CharacterAndroidProps) {
  const android = useCharacterItems(characterAndroid, "android");
  const [selectedAndroid, setSelectedAndroid] = useState<string | null>(null);
  const [selectedBeauty, setSelectedBeauty] = useState<string | null>(null);

  const handleAndroidBoxClick = (androidEquipName: string) => {
    setSelectedAndroid(prevAndroid => prevAndroid === androidEquipName ? null : androidEquipName)
  }

  const handleBeautyClick = (beautyName: string) => {
    setSelectedBeauty(prevBeauty => (prevBeauty === beautyName ? null : beautyName));
  };

  const handleAndroidEquipBoxClick = (slotName: string) => {
    if (["헤어", "피부", "얼굴"].includes(slotName)) {
      handleBeautyClick(slotName);
    } else {
      handleAndroidBoxClick(slotName);
    }
  };

  const selectedAndroidItem = selectedAndroid ? 
    characterAndroid.android_cash_item_equipment.find(
      (item) => item.cash_item_equipment_slot === selectedAndroid
    ) : null;
  
  return (
      <div className={styles.androidColumn}>
        <div className={styles.androidContainer}>
          {androidItemList.map((item) => {
            const equipmentImage = android[item.name] || item.icon || "";

            return (
              <EquipBox
                key={item.name}
                slotCoordinate={styles[`slot-${item.slot}`]}
                equipmentImage={equipmentImage || ""}
                slotName={item.name}
                partName={item.partName}
                isCursor={true}
                onClick={() => handleAndroidEquipBoxClick(item.name)}
              />
            );
          })}
          <div className={styles.rotateText}>ANDROID</div>
        </div>

        {selectedAndroidItem ? (
          <div className={styles.androidBoxContainer}>
            <AndroidEquipBox characterAndroid={selectedAndroidItem} />
          </div>
        ) : (
        selectedAndroid && null
        )}

        {selectedBeauty && (
          <div className={styles.androidBeautyBoxContainer}>
            <AndroidBeautyBox androidBeauty={characterAndroid} selectedBeauty={selectedBeauty} />
          </div>
        )}

    </div>
  );
}
