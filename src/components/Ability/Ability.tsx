import { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import styles from "./ability.module.css";

// types
import { AbilityPresetProps } from "@/Types/Ability";

export default function Ability({ characterAbility }: any) {
  const [activePreset, setActivePreset] = useState<number>(0);
  const [currentPreset, setCurrentPreset] = useState<AbilityPresetProps>({
    preset: {
      ability_preset_grade: '',
      ability_info: []
    }
  });

  console.log("어빌 보기:", characterAbility);
  console.log("적용 중인 어빌 보기:", currentPreset);

  const getPresetData = (presetNo: number) => {
    return {
      preset: characterAbility?.[`ability_preset_${presetNo}`] || {
        ability_preset_grade: '',
        ability_info: []
      },
    };
  };

  useEffect(() => {
    if (characterAbility) {
      const initialPresetNo = parseInt(characterAbility.preset_no) || 1;
      setActivePreset(initialPresetNo);
      const presetData = getPresetData(initialPresetNo);
      setCurrentPreset(presetData);
    }
  }, [characterAbility]);

  useEffect(() => {
    if (activePreset && characterAbility) {
      const presetData = getPresetData(activePreset);
      setCurrentPreset(presetData);
    }
  }, [activePreset, characterAbility]);

  const handlePresetChange = (presetNo: number) => {
    setActivePreset(presetNo);
  };

  const getAbilityClass = (grade: string) => {
    switch (grade) {
      case "레전드리":
        return styles.legendary;
      case "유니크":
        return styles.unique;
      case "에픽":
        return styles.epic;
      case "레어":
        return styles.rare;
      default:
        return "";
    }
  };

  return (
    <div className={styles.mainDiv}>
      <p className={styles.mainTitle}>ABILITY</p>
      <div className={`${styles.gradeDiv} ${getAbilityClass(currentPreset?.preset.ability_preset_grade)}`}>
        <FaBookmark style={{ marginRight: "10px" }} /> {currentPreset.preset.ability_preset_grade} 어빌리티
      </div>
      <div className={styles.abilityDiv}>
        {currentPreset.preset.ability_info?.map((abil, index) => (
          <div
            className={`${styles.abilityContent} ${getAbilityClass(abil.ability_grade)}`}
            key={index}
          >
            {abil.ability_value}
          </div>
        ))}
      </div>
      <div className={styles.fameDiv}>
        명성치
        <div className={styles.remainFame}>{characterAbility?.remain_fame}</div>
      </div>
      <div className={styles.presetDiv}>
        PRESETS
        <button className={styles.presetButton} onClick={() => handlePresetChange(1)}>1</button>
        <button className={styles.presetButton} onClick={() => handlePresetChange(2)}>2</button>
        <button className={styles.presetButton} onClick={() => handlePresetChange(3)}>3</button>
      </div>
    </div>
  );
}
