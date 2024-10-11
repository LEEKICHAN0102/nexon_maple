"use client";

import { useEffect } from "react";
import { useSearchParams } from 'next/navigation'

// store
import useOcid from "@/store/ocid";

// components
import Character from "@/components/Character/Character";
import Detail from "@/components/Detail/Detail";

import styles from "./search.module.css";

import Loading from "@/components/Loading/Loading";

import { useOcidQuery } from "@/hooks/apis/useOcidQuery";
import { useCharacterQuery } from "@/hooks/apis/useCharacterQuery";

export default function SearchPage() {
  const { setOcid } = useOcid();
  const searchParams = useSearchParams();
  const characterName = searchParams.get('name'); // 예: name="대리깨진사람"

  const { data: ocidData, isLoading: ocidLoading, error: ocidError } = useOcidQuery(characterName || "");

  useEffect(() => {
    if (ocidData) {
      setOcid(ocidData.ocid);
    }
  }, [ocidData]); // 초기 마운트시 ocidData & 업데이트

  if (ocidLoading) {
    return <Loading />
  }
  
  if (ocidError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className={styles.mainDiv}>
      <Character />
      <Detail />
    </div>
  );
}
