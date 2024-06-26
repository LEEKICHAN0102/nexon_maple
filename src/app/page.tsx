"use client"

import Image from "next/image";
import styles from "./page.module.css";
import MainImage from "../../public/the_lake_of_oblivion.webp";
import { getOcid, getCharacter } from "@/api/api";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import useStore from "@/store/store";

export interface CharacterProps {
  access_flag: string;
  character_class: string;
  character_class_level: string
  character_date_create: string;
  character_exp: number;
  character_exp_rate: string;
  character_gender: string;
  character_guild_name: string;
  character_image: string;
  character_level: number;
  character_name: string;
  date: null;
  liberation_quest_clear_flag: string;
  world_name: string;
}

export default function Home() {
  const [characterName, setCharacterName] = useState("");
  const [characterStatus, setCharacterStatus] = useState<CharacterProps | null>(null);
  const [ isModal , setModal ] = useState<boolean | undefined>();
  const { ocidState, setOcid } = useStore()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  }

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 제출 동작 방지
  
    try {
      const characterOcid = await getOcid(characterName);
      const characterData = await getCharacter(characterOcid);
      setOcid(characterOcid);
      setCharacterStatus(characterData);
      setModal(false);
    } catch (error) {
      console.error("캐릭터 정보를 가져오는 중 에러 발생:", error);
    }
  }

  useEffect(() => {
    console.log("캐릭터 OCID:", ocidState);
  },[ocidState])
  
  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <Image className={styles.mainImage} src={MainImage} alt="소멸의 여로" /> 
        <h1 className={styles.mainTitle}>NEXON_MAPLE</h1>
        {characterStatus ? (
          <Card character={characterStatus} />
        ) : null}
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
