// styles
import styles from "./equipConditional.module.css";

// components
import Loading from "../Loading/Loading";
import Navigation from "../Navigation/Navigation";
import CashItem from "../Equipment/CashItem";

// query
import { useCashQuery } from "@/hooks/apis/useCashQuery";

// store
import useOcid from "@/store/ocid";

export default function CashConditional() {
  const { ocidState } = useOcid();

  const { data: cashData, isLoading: cashLoading, error: cashError } = useCashQuery(ocidState);

  if (cashLoading) {
    return <Loading />;
  }

  if (cashError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return(
    <main className={styles.equipMain}>
      <div className={styles.equipContent}>
        <div className={styles.equipNav}>
          <Navigation />
          <div className={styles.equipCharacter}>
            <CashItem characterCash={cashData} />
          </div>
        </div>
      </div>
    </main>
  )
}