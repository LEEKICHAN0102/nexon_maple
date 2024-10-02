import { useState, useEffect } from "react";
import styles from "./hyperStat.module.css";

// types
import { HyperObjectProps } from "@/Types/Hyper";

interface PresetData {
  preset: HyperObjectProps[];
  remainPoint: number;
}

export default function HyperStat({ characterHyper }: { characterHyper: any }) {
  const [activePreset, setActivePreset] = useState<number>(parseInt(characterHyper?.use_preset_no));
  const [currentPreset, setCurrentPreset] = useState<PresetData>({
    preset: [],
    remainPoint: 0,
  });

  console.log("하이퍼 스텟:", characterHyper);

  const getPresetData = (presetNo: number) => {
    switch (presetNo) {
      case 1:
        return {
          preset: characterHyper.hyper_stat_preset_1,
          remainPoint: characterHyper.hyper_stat_preset_1_remain_point
        };
      case 2:
        return {
          preset: characterHyper.hyper_stat_preset_2,
          remainPoint: characterHyper.hyper_stat_preset_2_remain_point
        };
      case 3:
        return {
          preset: characterHyper.hyper_stat_preset_3,
          remainPoint: characterHyper.hyper_stat_preset_3_remain_point
        };
    }
  };

  useEffect(() => {
    const presetData: any = getPresetData(activePreset);
    setCurrentPreset(presetData);
  }, [activePreset, characterHyper]);


  // 프리셋 선택 핸들러
  const handlePresetChange = (presetNo: number) => {
    setActivePreset(presetNo);
  };


  return(
    <div className={styles.mainDiv}>
      <p className={styles.mainTitle}>HYPER STAT</p>
      <div className={styles.contentDiv}>
        {currentPreset?.preset?.map((stat, index) => (
          <div className={styles.content} key={index}>
            <span className={styles.statType}>{stat.stat_type}</span>
            <span className={styles.statLevel}>Lv. {stat.stat_level}</span>
          </div>
        ))}
      </div>
      <div className={styles.presetDiv}>
        PRESETS
        <button className={styles.presetButton} onClick={() => handlePresetChange(1)}>1</button>
        <button className={styles.presetButton} onClick={() => handlePresetChange(2)}>2</button>
        <button className={styles.presetButton} onClick={() => handlePresetChange(3)}>3</button>
      </div>
      <div className={styles.pointDiv}>
        POINT
        <div className={styles.remainPoint}>{currentPreset?.remainPoint}</div>
      </div>
    </div>
  )
}
