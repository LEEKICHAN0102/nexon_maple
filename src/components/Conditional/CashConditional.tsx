// styles
import styles from "./cashConditional.module.css"

// components
import Loading from "../Loading/Loading";
import Navigation from "../Navigation/Navigation";
import CashItem from "../Equipment/CashItem";

// query
import { useCashQueries } from "@/hooks/apis/Equipment/Cash/useCashQueries";

// store
import useOcid from "@/store/ocid";
import Android from "../Equipment/Android";

export default function CashConditional() {
  const { ocidState } = useOcid();
  const results = useCashQueries(ocidState);

  const isLoading = results.some(result => result.isLoading);
  const isError = results.some(result => result.isError);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  
  const cashData = results[0].data;
  const androidData = results[1].data;

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