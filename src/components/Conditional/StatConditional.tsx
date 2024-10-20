// styles
import styles from "./statConditional.module.css";

// components
import Ability from "../Ability/Ability";
import HyperStat from "../HyperStat/HyperStat";
import Stat from "../Stat/Stat";
import Loading from "../Loading/Loading";

// query
import { useStatQueries } from "@/hooks/apis/Stat/useStatQueries";

// store
import useOcid from "@/store/ocid";
import Navigation from "../Navigation/Navigation";

export default function StatConditional() {
  const { ocidState } = useOcid();

  const results = useStatQueries(ocidState);

  const isLoading = results.some(result => result.isLoading);
  const isError = results.some(result => result.isError);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const statData = results[0].data;
  const abilityData = results[1].data;
  const hyperData = results[2].data;

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