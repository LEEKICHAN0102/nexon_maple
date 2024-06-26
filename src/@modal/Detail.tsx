import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import useStore from "@/store/store";
import { getStat, getItemEquipment } from "@/api/api";
import Stat from "@/components/Stat";
import Equipment from "@/components/Equipment";
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

interface DetailProps {
  onClose: () => void;
}

export default function Detail({ onClose }: DetailProps) {
  const { ocidState } = useStore();
  const [statData, setStatData] = useState<StatProps>();
  const [equipData, setEquipData] = useState<EquipProps>();

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

    fetchStat();
    fetchEquip();
  }, [ocidState]);

  return (
    <main className={styles.detailMain}>
      <div className={styles.detailLeft}>
        <Stat characterStat={statData} />
      </div>
      <div className={styles.detailRight}>
        {equipData && <Equipment characterEquipment={equipData} />}
      </div>
      <TiDelete className={styles.detailButton} onClick={onClose} />
    </main>
  );
}
