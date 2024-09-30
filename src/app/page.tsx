"use client"

import Image from "next/image";
import styles from "./page.module.css";
import MainImage from "../../public/the_lake_of_oblivion.webp";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [characterName, setCharacterName] = useState("");
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  }

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 제출 동작 방지
  
    try {
      router.push(`/search?name=${characterName}`);
    } catch (error) {
      console.error("캐릭터 ocid를 가져오는 중 에러 발생:", error);
    }
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <Image className={styles.mainImage} src={MainImage} alt="소멸의 여로" /> 
        <h1 className={styles.mainTitle}>NEXON_MAPLE OPEN API</h1>
        <form className={styles.mainForm} onSubmit={handleSearchSubmit}>
          <input
            className={styles.mainInput}
            placeholder="캐릭터 이름을 입력 후 검색!"
            value={characterName}
            onChange={handleInputChange}
          />
          <button className={styles.mainButton} type="submit">검색</button>
        </form>
      </div>
    </main>
  );
}
