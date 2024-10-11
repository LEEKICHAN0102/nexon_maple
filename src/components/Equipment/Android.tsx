import styles from "./android.module.css";
import EquipBox from "./EquipBox";

import { AndroidProps } from "@/Types/Android";

// icons
import hair_icon from "../../../public/icon/hair-icon.png";
import face_icon from "../../../public/icon/face-icon.png";
import useCharacterItems from "@/hooks/useCharacterItems";

interface CharacterAndroidProps {
  characterAndroid: AndroidProps;
}


export default function Android({ characterAndroid }: CharacterAndroidProps) {
  console.log(characterAndroid, "안드로이드 아이템");
  const android = useCharacterItems(characterAndroid, "android");
  
  return (
      <div className={styles.androidColumn}>
        <div className={styles.androidContainer}>
          <EquipBox 
            slotCoordinate={styles['slot-1']}
            equipmentImage={android["반지4"]}
            altImage={"반지4"}
            partName="RING"
          />
          <EquipBox 
            slotCoordinate={styles['slot-2']}
            equipmentImage={android["모자"]}
            altImage={"모자"}
            partName="CAP"
          />
          <EquipBox 
            slotCoordinate={styles['slot-3']}
            equipmentImage={hair_icon}
            altImage={"헤어"}
            partName="HAIR"
          />
          <EquipBox 
            slotCoordinate={styles['slot-4']}
            equipmentImage={android["반지3"]}
            altImage={"반지3"}
            partName="RING"
          />
          <EquipBox 
            slotCoordinate={styles['slot-5']}
            equipmentImage={android["얼굴장식"]}
            altImage={"얼굴장식"}
            partName="FORE"
          />
          <EquipBox 
            slotCoordinate={styles['slot-6']}
            equipmentImage={face_icon}
            altImage={"얼굴"}
            partName="FACE"
          />
          <EquipBox 
            slotCoordinate={styles['slot-7']}
            equipmentImage={android["반지2"]}
            altImage={"반지2"}
            partName="RING"
          />
          <EquipBox 
            slotCoordinate={styles['slot-8']}
            equipmentImage={android["눈장식"]}
            altImage={"눈장식"}
            partName="EYE"
          />
          <EquipBox 
            slotCoordinate={styles['slot-9']}
            equipmentImage={face_icon}
            altImage={"피부"}
            partName="SKIN"
          />
          <EquipBox 
            slotCoordinate={styles['slot-10']}
            equipmentImage={android["반지1"]}
            altImage={"반지1"}
            partName="RING"
          />
          <EquipBox 
            slotCoordinate={styles['slot-11']}
            equipmentImage={android["상의"]}
            altImage={"상의"}
            partName="CLOTHES"
          />
          <EquipBox 
            slotCoordinate={styles['slot-12']}
            equipmentImage={android["귀걸이"]}
            altImage={"귀걸이"}
            partName="EAR"
          />
          <EquipBox 
            slotCoordinate={styles['slot-13']}
            equipmentImage={android["하의"]}
            altImage={"하의"}
            partName="PANTS"
          />
          <EquipBox 
            slotCoordinate={styles['slot-14']}
            equipmentImage={android["무기"]}
            altImage={"무기"}
            partName="WEAPON"
          />
          <EquipBox 
            slotCoordinate={styles['slot-15']}
            equipmentImage={android["장갑"]}
            altImage={"장갑"}
            partName="GLOVES"
          />
          <EquipBox 
            slotCoordinate={styles['slot-16']}
            equipmentImage={android["신발"]}
            altImage={"신발"}
            partName="SHOES"
          />
          <EquipBox 
            slotCoordinate={styles['slot-17']}
            equipmentImage={android["망토"]}
            altImage={"망토"}
            partName="CAPE"
          /> 
          <div className={styles.rotateText}>ANDROID</div>
        </div>
    </div>
  );
}
