import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import useStore from "@/store/store";
import { getStat, getItemEquipment } from "@/api/api";
import Stat from "@/components/Stat";
import Equipment from "@/components/Equipment";

interface FinalProps {
  stat_name: string;
  stat_value: string;
}

export interface StatProps {
  date?: null;
  character_class: string;
  final_stat: FinalProps[];
}

// interface EquipProps {
//   date?: null;
//   character_class: string;
//   character_gender: string;

// }


export default function Detail() {
  const { ocidState } = useStore();
  const [ statData, setStatData ] = useState<StatProps>();
  // const [ equipData, setEquipData ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statResponse = await getStat(ocidState);
        setStatData(statResponse);
        await getItemEquipment(ocidState);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[ocidState]);

  return(
    <main className={styles.detailMain}>
      <div className={styles.detailLeft}>
        <Stat characterStat={statData} />
      </div>
      <div className={styles.detailRight}>
        {/* <Equipment characterEquipment={} /> */}
      </div>
    </main>
  );
}