import { useState, useEffect } from "react";
import styles from "./hyperStat.module.css";

// types
import { HyperObjectProps } from "@/Types/Hyper";

interface PresetDataProps {
  preset: HyperObjectProps[];
  remainPoint: number;
}

export default function HyperStat({ characterHyper }: any ) {
  const [activePreset, setActivePreset] = useState<number>(0);
  const [currentPreset, setCurrentPreset] = useState<PresetDataProps>({
    preset: [],
    remainPoint: 0,
  });

  const getPresetData = (presetNo: number) => {
    return {
      preset: characterHyper?.[`hyper_stat_preset_${presetNo}`] || [],
      remainPoint: characterHyper?.[`hyper_stat_preset_${presetNo}_remain_point`] || 0
    };
  };

  useEffect(() => {
    if (characterHyper) {
      const initialPresetNo = parseInt(characterHyper.use_preset_no) || 1;
      setActivePreset(initialPresetNo);
      const presetData: PresetDataProps = getPresetData(initialPresetNo);
      setCurrentPreset(presetData);
    }
  }, [characterHyper]);

  useEffect(() => {
    if (activePreset && characterHyper) {
      const presetData: PresetDataProps = getPresetData(activePreset);
      setCurrentPreset(presetData);
    }
  }, [activePreset, characterHyper]);

  const handlePresetChange = (presetNo: number) => {
    setActivePreset(presetNo);
  };

  return (
    <div className={styles.mainDiv}>
      <p className={styles.mainTitle}>HYPER STAT</p>
      <div className={styles.contentDiv}>
        {currentPreset?.preset?.map((stat, index) => (
          <div className={styles.content} key={index}>
            <span>{stat.stat_type}</span>
            <span>Lv. {stat.stat_level}</span>
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
  );
}
