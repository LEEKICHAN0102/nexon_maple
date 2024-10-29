"use client"

import Image from "next/image";
import styles from "./page.module.css";
import MainImage from "../../public/the_lake_of_oblivion.webp";
import { useRouter } from "next/navigation";
import useCharacterName from "@/store/name";

export default function Home() {
  const { characterName, setCharacterName } = useCharacterName();
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  }

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?name=${characterName}`);
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <Image className={styles.mainImage} src={MainImage} alt="소멸의 여로" /> 
        <h1 className={styles.mainTitle}>NEXON_MAPLE SSAK SSAK</h1>

        <form className={styles.mainForm} onSubmit={handleSearchSubmit}>
          <input
            className={styles.mainInput}
            placeholder="캐릭터 이름을 입력 후 검색! | EX) 대리깨진사람"
            value={characterName}
            onChange={handleInputChange}
          />
          <button className={styles.mainButton} type="submit">검색</button>
        </form>

        <div className={styles.footerText}>
          <span>This website is designed for study purposes and does not generate revenue</span>
          <span>Data based on NEXON Open API</span>
        </div>
      </div>
    </main>
  );
}
