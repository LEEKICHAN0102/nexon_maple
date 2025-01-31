// Home.tsx
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MainImage from "../../public/the_lake_of_oblivion.webp";
import { useRouter } from "next/navigation";
import useCharacterName from "@/store/name";
import useToast from "@/store/toast";

export default function Home() {
  const { characterName, setCharacterName } = useCharacterName();
  const router = useRouter();
  const { setToast } = useToast();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  };

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 특수 기호, 이모지, 단일 자음 모음 유효성 REGEXP (한글 2자 이상 영문 4자이상 | 섞어서는 4bit)
    const isValidName = /^(?:(?:[가-힣]{2,})|(?:[a-zA-Z]{4,})|(?:[a-zA-Z가-힣0-9]{3,}))$/.test(characterName);

    if (!isValidName) {
      setToast("올바르지 않은 닉네임 형식입니다.");
      return;
    }

    router.push(`/search?name=${characterName}`);
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <Image
          className={styles.mainImage}
          src={MainImage}
          alt="소멸의 여로"
          priority
        />
        <h1 className={styles.mainTitle}>NEXON_MAPLE SSAK SSAK</h1>

        <form className={styles.mainForm} onSubmit={handleSearchSubmit}>
          <input
            className={styles.mainInput}
            placeholder="캐릭터 이름을 입력 후 검색!"
            value={characterName}
            onChange={handleInputChange}
          />
          <button className={styles.mainButton} type="submit">검색</button>
        </form>

        <div className={styles.footerText}>
          <span>This website is designed for study purposes and does not generate revenue</span>
          <span style={{ cursor: "pointer", zIndex: 100 }}>
            <a href="https://openapi.nexon.com/ko/" target="_blank">Data based on NEXON Open API</a>
          </span>
        </div>
      </div>
    </main>
  );
}
