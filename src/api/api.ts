import axios from "axios";
import { BASE_URL, NEXON_API_KEY } from "@/constant/constant";

export const getOcid = async (characterName: string) => {
  try {

    const responseOcid = await axios.get(`${BASE_URL}/maplestory/v1/id`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        character_name: characterName,
      },
    })

    return responseOcid.data.ocid;

  } catch (error) {
    console.error("OCID 요청 중 에러:", error);
  }
};

export const getCharacter = async (ocid: string) => {
  try {
    const responseCharacter = await axios.get(`${BASE_URL}/maplestory/v1/character/basic`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    return responseCharacter.data;
    
  } catch (error) {
    console.error("API 요청 중 에러:", error);
  }
};

export const getStat = async (ocid: string) => {
  try{
    const responseState = await axios.get(`${BASE_URL}/maplestory/v1/character/stat`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseState.data);
    return responseState.data;
  } catch (error) {
    console.log("캐릭터 스탯 정보 요청 중 에러:", error);
  }
}

export const getItemEquipment = async (ocid: string) => {
  try{
    const responseEquipment = await axios.get(`${BASE_URL}/maplestory/v1/character/item-equipment`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseEquipment.data);
    return responseEquipment.data;
  } catch (error) {
    console.log("캐릭터 장착 아이템(캐시 제외) 정보 요청 중 에러:", error);
  }
}

export const getAndroid = async (ocid: string) => {
  try{
    const responseAndroid = await axios.get(`${BASE_URL}/maplestory/v1/character/android-equipment`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseAndroid.data);
    return responseAndroid.data;
  } catch (error) {
    console.log("캐릭터 장착 안드로이드 정보 요청 중 에러:", error);
  }
}