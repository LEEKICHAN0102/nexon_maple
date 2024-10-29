import axios from "axios";
export const BASE_URL = "https://open.api.nexon.com";

const fetchData = async (endpoint: string, params: Record<string, string>, errorMessage: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_NEXON_API_KEY,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error(`${endpoint} 요청 중 에러:`, errorMessage);
    throw error;
  }
};

export const getOcid = (characterName: string) => {
  return fetchData('/maplestory/v1/id', { character_name: characterName }, "OCID 데이터 가져오는 중 에러");
};

export const getCharacter = (ocid: string) => {
  return fetchData('/maplestory/v1/character/basic', { ocid }, "캐릭터 기본 데이터 가져오는 중 에러 발생");
};

export const getStat = (ocid: string) => {
  return fetchData('/maplestory/v1/character/stat', { ocid }, "캐릭터 스텟 데이터 가져오는 중 에러 발생");
};

export const getItemEquipment = (ocid: string) => {
  return fetchData('/maplestory/v1/character/item-equipment', { ocid }, "캐릭터 장착 아이템(캐시 제외) 정보 요청 중 에러");
};

export const getAndroid = (ocid: string) => {
  return fetchData('/maplestory/v1/character/android-equipment', { ocid }, "캐릭터 장착 안드로이드 정보 요청 중 에러");
};

export const getHyperStat = (ocid: string) => {
  return fetchData('/maplestory/v1/character/hyper-stat', { ocid }, "캐릭터 하이퍼 스탯 정보 요청 중 에러");
};

export const getAbility = (ocid: string) => {
  return fetchData('/maplestory/v1/character/ability', { ocid }, "캐릭터 어빌리티 정보 요청 중 에러");
};

export const getSymbol = (ocid: string) => {
  return fetchData('/maplestory/v1/character/symbol-equipment', { ocid }, "캐릭터 장착 심볼 정보 요청 중 에러");
};

export const getSetEffect = (ocid: string) => {
  return fetchData('/maplestory/v1/character/set-effect', { ocid }, "캐릭터 적용 세트 효과 정보 요청 중 에러");
};

export const getVMatrix = (ocid: string) => {
  return fetchData('/maplestory/v1/character/vmatrix', { ocid }, "캐릭터 V매트릭스 정보 요청 중 에러");
};

export const getHexaMatrix = (ocid: string) => {
  return fetchData('/maplestory/v1/character/hexamatrix', { ocid }, "캐릭터 헥사 매트릭스 정보 요청 중 에러");
};

export const getHexaMatrixStat = (ocid: string) => {
  return fetchData('/maplestory/v1/character/hexamatrix-stat', { ocid }, "캐릭터 헥사 매트릭스 스탯 정보 요청 중 에러");
};

export const getPet = (ocid: string) => {
  return fetchData('/maplestory/v1/character/pet-equipment', { ocid }, "펫 장착 정보 요청 중 에러");
};

export const getLink = (ocid: string) => {
  return fetchData('/maplestory/v1/character/link-skill', { ocid }, "캐릭터 장착 링크 스킬 정보 요청 중 에러");
};

export const getCash = (ocid: string) => {
  return fetchData('/maplestory/v1/character/cashitem-equipment', { ocid }, "캐릭터 장착 캐시 아이템 정보 요청 중 에러");
};

export const getBeauty = (ocid: string) => {
  return fetchData('/maplestory/v1/character/beauty-equipment', { ocid }, "캐릭터 장착 헤어, 성형, 피부 정보 요청 중 에러");
};

export const getDojang = (ocid: string) => {
  return fetchData('/maplestory/v1/character/dojang', { ocid }, "무릉 도장 최고기록 정보 요청 중 에러");
};

export const getPopularity = (ocid: string) => {
  return fetchData('/maplestory/v1/character/popularity', { ocid }, "캐릭터 인기도 정보 요청 중 에러");
};

export const getUnion = (ocid: string) => {
  return fetchData('/maplestory/v1/user/union', { ocid }, "유니온 기본 정보 요청 중 에러");
};