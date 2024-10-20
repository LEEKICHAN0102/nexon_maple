import styles from "./equipStatBox.module.css";
import { IEProps } from "@/Types/Equipment";

// Images
import Image from "next/image";
import dividerImg from "../../../public/icon/bg-divider.png";
import legendary from "../../../public/icon/legendary_icon.png"
import unique from "../../../public/icon/unique_icon.png";
import epic from "../../../public/icon/epic_icon.png";
import rare from "../../../public/icon/rare_icon.png";

import StatText from "./StatText";
import StarForce from "./StarForce";

interface BoxProps {
  characterEquipment: IEProps;
}

export default function EquipStatBox({ characterEquipment }: BoxProps) {
  const soulName = characterEquipment?.soul_name;
  const formattedSoulName = soulName?.split('의')[0] + "의"; // 진 힐라, 카오스 블러디 퀸 등 예외 떄문에 "의" split 으로 처리

  const getItemGrade = (grade: string) => {
    switch (grade) {
      case "레전드리":
        return legendary;
      case "유니크":
        return unique;
      case "에픽":
        return epic;
      case "레어":
        return rare;
      default:
        return "";
    }
  };

  return (
    <div className={styles.detailCoveringBox}>
      <div className={styles.equipDetailBox}>
        
        {/* 상단 스타포스 및 아이템 이름 */}
        <div className={styles.starForceBox}>
          <div className={styles.itemNameBox}>
            <StarForce starCount={characterEquipment.starforce} />
            <span className={styles.itemNameSpan}>
              {characterEquipment.soul_name && (
                <span style={{ color: "rgb(204, 255, 0)"}}>{formattedSoulName}</span>
              )}
              {characterEquipment.item_name}
              {Number(characterEquipment.scroll_upgrade) > 0 && `(+${characterEquipment.scroll_upgrade})`} {/* 문자열을 숫자로 변환 */}
            </span>
            <p>({characterEquipment.potential_option_grade} 아이템)</p>
          </div>
        </div>

        {/*  아이템 디바이더 */}
        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        {/* 아이템 이미지 */}
        <div className={styles.itemImageBox}>
          <img src={characterEquipment.item_shape_icon} alt={characterEquipment.item_name} />
          <span>■ REQ LEV {characterEquipment.item_base_option.base_equipment_level}</span>
        </div>

        <div className={styles.divider}>
          <Image src={dividerImg} alt="item_detail_divider" />
        </div>

        {/* 기본 옵션 */}
        <div className={styles.itemStatBox}>
          <StatText
            itemPart={characterEquipment.item_equipment_part}
            totalOption={characterEquipment.item_total_option}
            baseOption={characterEquipment.item_base_option}
            addOption={characterEquipment.item_add_option}
            starForceOption={characterEquipment.item_starforce_option}
            etcOption={characterEquipment.item_etc_option}
            cuttableCount={characterEquipment.cuttable_count}
            goldenHammer={characterEquipment.golden_hammer_flag}
            upgradeResilience={characterEquipment.scroll_resilience_count}
            upgradableCount={characterEquipment.scroll_upgradeable_count}
          />
        </div>

        {/* 잠재 옵션 */}
        {characterEquipment.potential_option_grade && 
          <>
            <div className={styles.divider}>
              <Image src={dividerImg} alt="item_detail_divider" />
            </div>
            <div className={styles.potentialBox}>
              <div className={styles.gradeBox}>
                <Image src={getItemGrade(characterEquipment.potential_option_grade)} alt="item_grade_image" />
                잠재 옵션
              </div>
              <span>{characterEquipment.potential_option_1}</span>
              <span>{characterEquipment.potential_option_2}</span>
              <span>{characterEquipment.potential_option_3}</span>
            </div>
          </>
        }


        {/* 에디셔널 잠재 옵션 */}
        {characterEquipment.additional_potential_option_grade && 
          <>
            <div className={styles.divider}>
              <Image src={dividerImg} alt="item_detail_divider" />
            </div>
            <div className={styles.potentialBox}>
              <div className={styles.gradeBox}>
                <Image src={getItemGrade(characterEquipment.additional_potential_option_grade)} alt="additional_item_grade_image" />
                에디셔널 잠재 옵션
              </div>
              <span>{characterEquipment.additional_potential_option_1}</span>
              <span>{characterEquipment.additional_potential_option_2}</span>
              <span>{characterEquipment.additional_potential_option_3}</span>
            </div>
          </>
        }

        {/* 기타 옵션 (소울) */}
        {characterEquipment.soul_option &&        
          <>
            <div className={styles.divider}>
              <Image src={dividerImg} alt="item_detail_divider" />
            </div>
          
            <div className={styles.soulOptionBox}>
              <span style={{ color : "rgb(251, 251, 68)"}}>{characterEquipment.soul_name}</span>
              <span>{characterEquipment.soul_option}</span>
            </div>
          </>
        }
      </div>
    </div>
  );
}
