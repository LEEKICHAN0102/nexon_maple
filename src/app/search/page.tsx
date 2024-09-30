"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

// api
import { getOcid, getCharacter } from "@/api/api";

import { CharacterProps } from "@/Types/Character";

// store
import useStore from "@/store/store";

// components
import Card from "@/components/Card/Card";
import Detail from "@/components/Detail/Detail";

export default function SearchPage() {
  const [characterStatus, setCharacterStatus] = useState<CharacterProps | null>(null);
  const { ocidState, setOcid } = useStore();
  const searchParams = useSearchParams();
  const characterName = searchParams.get('name'); // example | name="대리깨진사람" return 대리깨진사람

  useEffect(() => {
    const fetchCharacterData = async () => {
      if (characterName) {
        try {
          const characterOcid = await getOcid(characterName); // 캐릭터 이름으로 OCID 가져오기
          setOcid(characterOcid); // 전역 상태에 OCID 저장

          const characterData = await getCharacter(ocidState); // OCID로 캐릭터 데이터 가져오기
          setCharacterStatus(characterData); // 상태 업데이트
        } catch (error) {
          console.error("캐릭터 정보를 가져오는 중 에러 발생:", error);
        }
      }
    };

    fetchCharacterData();
  }, [characterName, ocidState]); // characterName이 변경될 때마다 실행

  return (
    <div>
      <Card character={characterStatus} />
      <Detail />
    </div>
  );
}
