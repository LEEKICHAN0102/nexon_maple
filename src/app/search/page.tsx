"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation';

// store
import useOcid from "@/store/ocid";

// components
import Character from "@/components/Character/Character";
import Detail from "@/components/Detail/Detail";
import Loading from "@/components/Loading/Loading";

import { useOcidQuery } from "@/hooks/apis/useOcidQuery";
import styles from "./search.module.css";

export default function SearchPage() {
  const { ocidState, setOcid } = useOcid();
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCharacterName = searchParams.get('name') || "";

  const [characterName, setCharacterName] = useState(initialCharacterName);
  const [searchName, setSearchName] = useState(initialCharacterName);

  const { data: ocidData, isLoading: ocidLoading, error: ocidError } = useOcidQuery(searchName);

  useEffect(() => {
    if (ocidData) {
      setOcid(ocidData.ocid);
    }
  }, [ocidData, setOcid]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(event.target.value);
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (characterName) {
      setSearchName(characterName);
      router.push(`/search?name=${characterName}`);
    }
  }

  if (ocidError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.mainDiv}>
        <form className={styles.mainForm} onSubmit={handleSearchSubmit}>
          <input
            className={styles.mainInput}
            placeholder="캐릭터 이름을 입력!"
            value={characterName}
            onChange={handleInputChange}
          />
          <button className={styles.mainButton} type="submit">검색</button>
        </form>

        {ocidLoading ? (
          <Loading />
        ) : (
          <>
            <Character />
            <Detail />
          </>
        )}
      </main>
    </Suspense>
  );
}
