import axios from "axios";
import { BASE_URL, NEXON_API_KEY } from "@/constant/constant";

export const getSkillInfo = async (ocid: string, character_skill_grade: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/maplestory/v1/character/skill`, {
      headers: {
        "x-nxopen-api-key": NEXON_API_KEY,
      },
      params: {
        ocid,
        character_skill_grade,
      }
    });
    return response.data;
  } catch (error) {
    console.error(`VMATRIX 정보 요청 중 에러`);
    throw error;
  }
};