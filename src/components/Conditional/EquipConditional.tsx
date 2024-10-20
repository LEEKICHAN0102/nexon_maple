// styles
import styles from "./equipConditional.module.css";

// components
import Equipment from "../Equipment/Equipment";
import Symbol from "../Symbol/Symbol";
import Loading from "../Loading/Loading";
import Pet from "../Pet/Pet";

// query
import { useEquipmentQueries } from "@/hooks/apis/Equipment/useEquipmentQueries";

// store
import useOcid from "@/store/ocid";
import Navigation from "../Navigation/Navigation";

export default function EquipConditional() {
  const { ocidState } = useOcid();

  const results = useEquipmentQueries(ocidState);

  const isLoading = results.some(result => result.isLoading);
  const isError = results.some(result => result.isError);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  
  const equipData = results[0].data;
  const androidData = results[1].data;
  const symbolData = results[2].data;
  const petData = results[3].data;

  return(
    <main className={styles.equipMain}>
      <div className={styles.equipContent}>
        <div className={styles.equipNav}>
          <Navigation />
          <div className={styles.equipCharacter}>
            <Equipment characterEquipment={equipData} characterAndroid={androidData} />
            <Symbol characterSymbol={symbolData} />
          </div>
          <Pet characterPet={petData} />
        </div>
      </div>
    </main>
  )
}