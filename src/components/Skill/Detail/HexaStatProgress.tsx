import styles from "../linkSkill.module.css";

interface Stat {
  main_stat_name: string;
  main_stat_level: number;
  sub_stat_name_1: string;
  sub_stat_level_1: number;
  sub_stat_name_2: string;
  sub_stat_level_2: number;
}

interface HexaStatProgressProps {
  stat: Stat; // 각 스탯 정보
}

export default function HexaStatProgress({ stat }: HexaStatProgressProps) {
  const maxLevel = 10;

  // 레벨에 따라 ProgressBar를 나누는 함수
  const renderProgressBar = (level: number, isSub?: boolean) => {
    return (
      <div className={styles.progressContainer}>
        <div className={styles.progressBarContainer}>
          {Array.from({ length: maxLevel }, (_, index) => (
            <div
              key={index}
              className={`${styles.progressBarItem} ${index < level ? (isSub ? styles.sub : styles.active) : ''}`}
            ></div>
          ))}
        </div>
        <div className={styles.statSpan}>{level}</div>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.progressStat}>
        <div className={styles.statSpan}>MAIN STAT</div>
        <div className={styles.statSpan}>{stat.main_stat_name}</div>
        <div className={styles.progressRow}>
          {renderProgressBar(stat.main_stat_level)}
        </div>
      </div>

      {/* Sub stats */}
      <div className={styles.progressStat}>
        <div className={styles.statSpan}>SUB STAT</div>
        <div className={styles.statSpan}>{stat.sub_stat_name_1}</div>
        <div className={styles.progressRow}>
          {renderProgressBar(stat.sub_stat_level_1, true)} {/* isSub: true */}
        </div>
      </div>

      <div className={styles.progressStat}>
        <div className={styles.statSpan}>SUB STAT</div>
        <div className={styles.statSpan}>{stat.sub_stat_name_2}</div>
        <div className={styles.progressRow}>
          {renderProgressBar(stat.sub_stat_level_2, true)} {/* isSub: true */}
        </div>
      </div>
    </div>
  );
};
