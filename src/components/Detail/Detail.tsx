import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import useStore from "@/store/store";
import { getStat, getItemEquipment, getAndroid } from "@/api/api";
import Stat from "@/components/Stat/Stat";
import Equipment from "@/components/Equipment/Equipment";
import { TiDelete } from "react-icons/ti";
import { DProps, IEProps, MProps, TProps } from "@/Types/Equipment";

interface FinalProps {
  stat_name: string;
  stat_value: string;
}

export interface StatProps {
  date?: null;
  character_class: string;
  final_stat: FinalProps[];
}

export interface EquipProps {
  date?: null;
  character_class: string;
  character_gender: string;
  dragon_equipment?: DProps[];
  item_equipment: IEProps[];
  mechanic_equipment?: MProps[];
  title?: TProps;
}

export interface AndroidProps {
  date?: null;
  android_name: string;
  android_nickname: string;
  android_icon: string;
  android_description: string;
}

export default function Detail() {
  const { ocidState } = useStore();
  const [statData, setStatData] = useState<StatProps>();
  const [equipData, setEquipData] = useState<EquipProps>();
  const [androidData, setAndroidData] = useState<AndroidProps>();

  useEffect(() => {
    const fetchStat = async () => {
      try {
        const statResponse = await getStat(ocidState);
        setStatData(statResponse);
      } catch (error) {
        console.error("Error fetching stat data:", error);
      }
    };

    const fetchEquip = async () => {
      try {
        const equipResponse = await getItemEquipment(ocidState);
        setEquipData(equipResponse);
      } catch (error) {
        console.error("Error fetching equipment data:", error);
      }
    };

    const fetchAndroid = async () => {
      try {
        const androidResponse = await getAndroid(ocidState);
        setAndroidData(androidResponse);
      } catch (error) {
        console.error("Error fetching android data:", error);
      }
    };

    fetchStat();
    fetchEquip();
    fetchAndroid();
  }, [ocidState]);

  return (
    <main className={styles.detailMain}>
      <div className={styles.detailContent}>
        <div className={styles.detailLeft}>
          <Stat characterStat={statData} />
        </div>
        <div className={styles.detailRight}>
          {equipData && androidData && <Equipment characterEquipment={equipData} characterAndroid={androidData} />}
        </div>
      </div>
    </main>
  );
}
