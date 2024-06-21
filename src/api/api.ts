import axios from "axios";
import { BASE_URL, NEXON_API_KEY } from "@/constant/constant";

export const getCharacter = async (characterName: string) => {
  try {

    const responseOcid = await axios.get(`${BASE_URL}/maplestory/v1/id`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        character_name: characterName,
      },
    });

    const ocid = responseOcid.data;
    const responseCharacter = await axios.get(`${BASE_URL}/maplestory/v1/character/basic`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid: ocid.ocid,
      }
    });
    
    console.log(responseCharacter.data);
    return responseCharacter.data;
    
  } catch (error) {
    console.error("API 요청 중 에러:", error);
  }
};
