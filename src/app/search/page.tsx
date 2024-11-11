// SearchPage.tsx
"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import useCharacterName from "@/store/name";
import { AiFillHome, AiOutlineRollback } from "react-icons/ai";

// store
import useOcid from "@/store/ocid";
import useToast from "@/store/toast";

// components
import Character from "@/components/Character/Character";
import Detail from "@/components/Detail/Detail";
import Loading from "@/components/Loading/Loading";

import { useOcidQuery } from "@/hooks/apis/useOcidQuery";
import styles from "./search.module.css";

export default function SearchPage() {
  const { characterName, setCharacterName } = useCharacterName();
  const { setOcid } = useOcid();
  const router = useRouter();
  const params = useSearchParams();
  const searchName = params.get("name") || characterName;
  const { setToast } = useToast();

  const [inputName, setInputName] = useState(searchName);

  const { data: ocidData, isLoading: ocidLoading, error: ocidError } = useOcidQuery(searchName);
  
  useEffect(() => {
    if (ocidError) {
      setToast("존재하지 않는 계정 또는 장기간 접속하지 않은 캐릭터 입니다. \n 영어 대소문자 구별에 주의하세요!");
    }
  }, [ocidError, setToast]);

  useEffect(() => {
    if (ocidData) {
      setOcid(ocidData.ocid);
    }
  }, [ocidData, setOcid]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputName) {
      setCharacterName(inputName);
      router.push(`/search?name=${inputName}`);
    }
  };

  const handleBackHome = () => {
    router.push("/");
  };

  const handleBackMinus = () => {
    router.back();
  };

  return (
    <main className={styles.mainDiv}>
      <div className={styles.mainHandler}>
        <AiFillHome onClick={handleBackHome} />
        <form className={styles.mainForm} onSubmit={handleSearchSubmit}>
          <input
            className={styles.mainInput}
            placeholder="캐릭터 이름을 입력!"
            value={inputName}
            onChange={handleInputChange}
          />
          <button className={styles.mainButton} type="submit">검색</button>
        </form>
        <AiOutlineRollback onClick={handleBackMinus} />
      </div>

      {ocidLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Character />
          <Detail />
        </Suspense>
      )}
    </main>
  );
}
