// styles
import styles from "./equipConditional.module.css";

// components
import Equipment from "../Equipment/Equipment";
import Symbol from "../Symbol/Symbol";
import Loading from "../Loading/Loading";
import Pet from "../Pet/Pet";

// query
import { useEquipmentQuery } from "@/hooks/apis/useEquipQuery";
import { useAndroidQuery } from "@/hooks/apis/useAndroidQuery";
import { useSymbolQuery } from "@/hooks/apis/useSymbolQuery";
import { usePetQuery } from "@/hooks/apis/usePetQuery";

// store
import useOcid from "@/store/ocid";
import Navigation from "../Navigation/Navigation";

export default function EquipConditional() {
  const { ocidState } = useOcid();

  const { data: equipData, isLoading: equipLoading, error: equipError } = useEquipmentQuery(ocidState);
  const { data: androidData, isLoading: androidLoading, error: androidError } = useAndroidQuery(ocidState);
  const { data: symbolData, isLoading: symbolLoading, error: symbolError } = useSymbolQuery(ocidState);
  const { data: petData, isLoading: petLoading, error: petError } = usePetQuery(ocidState);

  if (equipLoading || androidLoading || symbolLoading || petLoading) {
    return <Loading />;
  }

  if (equipError || androidError || symbolError || petError) {
    return <div>Error occurred while fetching data.</div>;
  }

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