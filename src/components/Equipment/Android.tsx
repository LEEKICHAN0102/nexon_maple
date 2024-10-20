import styles from "./android.module.css";
import EquipBox from "./EquipBox";

import { AndroidProps } from "@/Types/Android";
import { androidItemList } from "@/constant/equipList";
import useCharacterItems from "@/hooks/useCharacterItems";

interface CharacterAndroidProps {
  characterAndroid: AndroidProps;
}


export default function Android({ characterAndroid }: CharacterAndroidProps) {
  const android = useCharacterItems(characterAndroid, "android");
  
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
              />
            );
          })}
          <div className={styles.rotateText}>ANDROID</div>
        </div>
    </div>
  );
}
