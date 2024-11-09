"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import useCharacterName from "@/store/name";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillHome, AiOutlineRollback } from "react-icons/ai";

// store
import useOcid from "@/store/ocid";

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

  const [inputName, setInputName] = useState(searchName);

  const { data: ocidData, isLoading: ocidLoading, error: ocidError } = useOcidQuery(searchName);

  useEffect(() => {
    if (ocidData) {
      setOcid(ocidData.ocid);
    }
  }, [ocidData, setOcid]);

  useEffect(() => {
    if (ocidError) {
      toast.error("장기간 접속하지 않았거나 존재하지 않는 계정 이름 입니다.");
      toast.warning("NEXON OPEN API는 영어 대,소문자를 구분합니다.");
    } 
  }, [ocidError]);

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
      <ToastContainer />
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
        <>
          <Suspense fallback={<Loading />}>
            <Character />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Detail />
          </Suspense>
        </>
      )}
    </main>
  );
}
