import { useState, useEffect } from "react";

// types
import { StatProps } from "@/Types/Character";

const useCharacterStats = (characterStat: StatProps | undefined) => {
  const [stats, setStats] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (characterStat) {
      const statMap: { [key: string]: string } = {};
      characterStat.final_stat.forEach(stat => {
        statMap[stat.stat_name] = stat.stat_value;
      });
      setStats(statMap);
    }
  }, [characterStat]);

  return stats;
};

export default useCharacterStats;
