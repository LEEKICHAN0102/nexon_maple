import styles from "./loading.module.css";
import { FadeLoader } from "react-spinners";

export default function Loading(){
  return (
    <div className={styles.loadingWrap}>
      <div className={styles.loadingBox}>
        <FadeLoader color="#4D607B" />
      </div>
    </div>
  );
};