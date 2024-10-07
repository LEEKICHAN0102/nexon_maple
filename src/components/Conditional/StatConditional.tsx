// styles
import styles from "./statConditional.module.css";

// components
import Ability from "../Ability/Ability";
import HyperStat from "../HyperStat/HyperStat";
import Stat from "../Stat/Stat";
import Loading from "../Loading/Loading";

// query
import { useStatQuery } from "@/hooks/apis/useStatQuery";
import { useHyperQuery } from "@/hooks/apis/useHyperQuery";
import { useAbilityQuery } from "@/hooks/apis/useAbilityQuery";

// store
import useOcid from "@/store/ocid";
import Navigation from "../Navigation/Navigation";

export default function StatConditional() {
  const { ocidState } = useOcid();

  const { data: statData, isLoading: statLoading, error: statError } = useStatQuery(ocidState);
  const { data: hyperData, isLoading: hyperLoading, error: hyperError } = useHyperQuery(ocidState);
  const { data: abilityData, isLoading: abilityLoading, error: abilityError } = useAbilityQuery(ocidState);

  if (statLoading || hyperLoading || abilityLoading) {
    return <Loading />;
  }

  if (statError || hyperError || abilityError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return(
    <main className={styles.statMain}>
      <div className={styles.statContent}>
        <HyperStat characterHyper={hyperData} />
        <div className={styles.statNav}>
          <Navigation />
          <Stat characterStat={statData} />
        </div>
        <Ability characterAbility={abilityData} />
      </div>
    </main>
  );
}