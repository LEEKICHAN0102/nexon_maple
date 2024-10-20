"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation'

// store
import useOcid from "@/store/ocid";

// components
import Character from "@/components/Character/Character";
import Detail from "@/components/Detail/Detail";

import styles from "./search.module.css";

import Loading from "@/components/Loading/Loading";

import { useOcidQuery } from "@/hooks/apis/useOcidQuery";

export default function SearchPage() {
  const { setOcid } = useOcid();
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCharacterName = searchParams.get('name') || "";

  const [characterName, setCharacterName] = useState("");
  const [searchName, setSearchName] = useState(initialCharacterName);

  const { data: ocidData, isLoading: ocidLoading, error: ocidError } = useOcidQuery(searchName);

  useEffect(() => {
    if (ocidData) {
      setOcid(ocidData.ocid);
    }
  }, [ocidData, setOcid]); // ocidData가 변경될 때만 실행

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value); // 입력된 값 상태 업데이트
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 제출 동작 방지

    if (characterName) {
      setSearchName(characterName);
      router.push(`/search?name=${characterName}`);
    }
  }

  if (ocidLoading) {
    return <Loading />
  }
  
  if (ocidError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className={styles.mainDiv}>
      <form className={styles.mainForm} onSubmit={handleSearchSubmit}>
        <input
          className={styles.mainInput}
          placeholder="캐릭터 이름을 입력!"
          value={characterName}
          onChange={handleInputChange}
        />
        <button className={styles.mainButton} type="submit">검색</button>
      </form>

      <Character />
      <Detail />
    </div>
  );
}
