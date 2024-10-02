import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import useStore from "@/store/store";
import { getStat, getItemEquipment, getAndroid, getHyperStat, getAbility } from "@/api/api";
import Stat from "@/components/Stat/Stat";
import Equipment from "@/components/Equipment/Equipment";
import HyperStat from "@/components/HyperStat/HyperStat";
import Ability from "@/components/Ability/Ability";

// Types
import { StatProps } from "@/Types/Character";
import { HyperProps } from "@/Types/Hyper";
import { AndroidProps } from "@/Types/Equipment";
import { EquipProps } from "@/Types/Equipment";
import { AbilityProps } from "@/Types/Ability";

export default function Detail() {
  const { ocidState } = useStore();
  const [statData, setStatData] = useState<StatProps>();
  const [equipData, setEquipData] = useState<EquipProps>();
  const [androidData, setAndroidData] = useState<AndroidProps>();
  const [hyperData, setHyperData] = useState<HyperProps>();
  const [abilityData, setAbilityData] = useState<AbilityProps>();

  useEffect(() => {
    const fetchStat = async () => {
      try {
        const statResponse = await getStat(ocidState);
        setStatData(statResponse);
      } catch (error) {
        console.error("Error fetching stat data:", error);
      }
    };

    // const fetchEquip = async () => {
    //   try {
    //     const equipResponse = await getItemEquipment(ocidState);
    //     setEquipData(equipResponse);
    //   } catch (error) {
    //     console.error("Error fetching equipment data:", error);
    //   }
    // };

    // const fetchAndroid = async () => {
    //   try {
    //     const androidResponse = await getAndroid(ocidState);
    //     setAndroidData(androidResponse);
    //   } catch (error) {
    //     console.error("Error fetching android data:", error);
    //   }
    // };

    const fetchHyperStat = async () => {
      try {
        const hyperStatResponse = await getHyperStat(ocidState);
        setHyperData(hyperStatResponse);
      } catch (error) {
        console.error("Error fetching Hyper Stat data:", error);
      }
    }

    const fetchAbility = async () => {
      try {
        const AbilityResponse = await getAbility(ocidState);
        setAbilityData(AbilityResponse);
      } catch (error) {
        console.error("Error fetching Ability data:", error);
      }
    }

    fetchStat();
    // fetchEquip();
    // fetchAndroid();
    fetchHyperStat();
    fetchAbility();
  }, [ocidState]);

  return (
    <main className={styles.detailMain}>
      <div className={styles.detailContent}>
          <HyperStat characterHyper={hyperData} />
          <Stat characterStat={statData} />
          {/* {equipData && androidData && <Equipment characterEquipment={equipData} characterAndroid={androidData} />} */}
          <Ability characterAbility={abilityData} />
      </div>
    </main>
  );
}
