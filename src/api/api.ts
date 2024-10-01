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

export const getHyperStat = async (ocid: string) => {
  try{
    const responseHyperStat = await axios.get(`${BASE_URL}/maplestory/v1/character/hyper-stat`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseHyperStat.data);
    return responseHyperStat.data;
  } catch (error) {
    console.log("캐릭터 하이퍼 스탯 정보 요청 중 에러:", error);
  }
}

export const getAbility = async (ocid: string) => {
  try{
    const responseAbility = await axios.get(`${BASE_URL}/maplestory/v1/character/ability`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseAbility.data);
    return responseAbility.data;
  } catch (error) {
    console.log("캐릭터 어빌리티 정보 요청 중 에러:", error);
  }
}

export const getSymbol = async (ocid: string) => {
  try{
    const responseSymbol = await axios.get(`${BASE_URL}/maplestory/v1/character/symbol-equipment`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseSymbol.data);
    return responseSymbol.data;
  } catch (error) {
    console.log("캐릭터 장착 심볼 정보 요청 중 에러:", error);
  }
}

export const getSetEffect = async (ocid: string) => {
  try{
    const responseSetEffect = await axios.get(`${BASE_URL}/maplestory/v1/character/set-effect`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseSetEffect.data);
    return responseSetEffect.data;
  } catch (error) {
    console.log("캐릭터 적용 세트 효과 정보 요청 중 에러:", error);
  }
}

export const getVMatrix = async (ocid: string) => {
  try{
    const responseVMatrix = await axios.get(`${BASE_URL}/maplestory/v1/character/vmatrix`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseVMatrix.data);
    return responseVMatrix.data;
  } catch (error) {
    console.log("캐릭터 V매트릭스 정보 요청 중 에러:", error);
  }
}

export const getHexaMatrix = async (ocid: string) => {
  try{
    const responseHexaMatrix = await axios.get(`${BASE_URL}/maplestory/v1/character/hexamatrix`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseHexaMatrix.data);
    return responseHexaMatrix.data;
  } catch (error) {
    console.log("캐릭터 어빌리티 정보 요청 중 에러:", error);
  }
}

export const getHexaMatrixStat = async (ocid: string) => {
  try{
    const responseHexaMatrixStat = await axios.get(`${BASE_URL}/maplestory/v1/character/hexamatrix-stat`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
      }
    });

    console.log(responseHexaMatrixStat.data);
    return responseHexaMatrixStat.data;
  } catch (error) {
    console.log("캐릭터 어빌리티 정보 요청 중 에러:", error);
  }
}