import { useState } from "react";

import styles from "./info.module.css";
import Navigation from "../Navigation/Navigation";

import Stat from "../Stat/Stat";
import Equipment from "../Equipment/Equipment";
import useNavStore from "@/store/nav";

export default function Info({ infoData }: any) {
  const { selected } = useNavStore();

  return (
    <main>
      <div className={styles.mainDiv}>
        <Navigation />
        {selected === "STAT" && <Stat statData={infoData} />}
        {selected === "EQUIP" && <Equipment equipData={infoData} />}
      </div>
    </main>
  );
}
