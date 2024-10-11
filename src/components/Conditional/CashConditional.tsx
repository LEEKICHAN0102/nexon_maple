// styles
import styles from "./cashConditional.module.css"

// components
import Loading from "../Loading/Loading";
import Navigation from "../Navigation/Navigation";
import CashItem from "../Equipment/CashItem";

// query
import { useCashQuery } from "@/hooks/apis/useCashQuery";

// store
import useOcid from "@/store/ocid";
import { useAndroidQuery } from "@/hooks/apis/useAndroidQuery";
import Android from "../Equipment/Android";

export default function CashConditional() {
  const { ocidState } = useOcid();

  const { data: cashData, isLoading: cashLoading, error: cashError } = useCashQuery(ocidState);
  const { data: androidData, isLoading: androidLoading, error: androidError } = useAndroidQuery(ocidState);

  if (cashLoading || androidLoading) {
    return <Loading />;
  }

  if (cashError || androidError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return(
    <main className={styles.cashMain}>
      <div className={styles.cashNav}>
        <Navigation />
        <div className={styles.cashCharacter}>
          <CashItem characterCash={cashData} />
          <Android  characterAndroid={androidData} />
        </div>
      </div>
    </main>
  )
}