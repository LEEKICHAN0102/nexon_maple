import axios from "axios";
export const BASE_URL = "https://open.api.nexon.com";

export const getSkillInfo = async (ocid: string, character_skill_grade: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/maplestory/v1/character/skill`, {
      headers: {
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_NEXON_API_KEY,
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