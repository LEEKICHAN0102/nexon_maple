import styles from "./detail.module.css";
import useOcid from "@/store/ocid";
import Info from "../Info/Info";
import HyperStat from "@/components/HyperStat/HyperStat";
import Ability from "@/components/Ability/Ability";

import Loading from "../Loading/Loading";

import { useStatQuery } from "@/hooks/apis/useStatQuery";
import { useHyperQuery } from "@/hooks/apis/useHyperQuery";
import { useAbilityQuery } from "@/hooks/apis/useAbilityQuery";
import useNavStore from "@/store/nav";
import { useEquipmentQuery } from "@/hooks/apis/useEquipQuery";

export default function Detail() {
  const { ocidState } = useOcid();
  const { selected } = useNavStore();
  const { data: statData, isLoading: statLoading, error: statError } = useStatQuery(ocidState);
  const { data: equipData, isLoading: equipLoading, error: equipError } = useEquipmentQuery(ocidState);
  const { data: hyperData, isLoading: hyperLoading, error: hyperError } = useHyperQuery(ocidState);
  const { data: abilityData, isLoading: abilityLoading, error: abilityError } = useAbilityQuery(ocidState);

  if (statLoading || equipLoading || hyperLoading || abilityLoading) {
    return <Loading />;
  }

  if (statError || equipError || hyperError || abilityError) {
    return <div>Error occurred while fetching data.</div>;
  }

  console.log(statData, " 스탯 잘 나오냐?");

  return (
    <main className={styles.detailMain}>
      <div className={styles.detailContent}>
        <HyperStat characterHyper={hyperData} />
        <Info infoData={statData} />
        <Ability characterAbility={abilityData} />
      </div>
    </main>
  );
}
