import styles from "./equipStatBox.module.css";

import { statKeys } from "@/constant/equipList";

import {
  ItemTotalOption,
  ItemBaseOption,
  ItemAddOption,
  ItemStarForceOption,
  ItemEtcOption,
} from "@/Types/Equipment";

interface StatProps {
  itemPart: string;
  totalOption: ItemTotalOption;  // 총 능력치
  baseOption: ItemBaseOption;   // 기본 능력치
  addOption: ItemAddOption;    // 추가 옵션
  starForceOption: ItemStarForceOption; // 스타포스 수치
  etcOption: ItemEtcOption;    // 기타 옵션
  cuttableCount: string;
  goldenHammer: string;
  upgradeResilience: string;
  upgradableCount: string;
}

export default function StatText({
  itemPart,
  totalOption,
  baseOption,
  addOption,
  starForceOption,
  etcOption,
  cuttableCount,
  goldenHammer,
  upgradeResilience,
  upgradableCount,
}: StatProps) {

  return (
    <div>
      <span>장비 분류 : {itemPart}</span>
      {statKeys.map((stat) => {
        const total = totalOption[stat.key as keyof ItemTotalOption];
        const base = baseOption[stat.key as keyof ItemBaseOption];
        const add = addOption[stat.key as keyof ItemAddOption];
        const starForce = starForceOption[stat.key as keyof ItemStarForceOption];
        const etc = etcOption[stat.key as keyof ItemEtcOption];

        // 총 옵션이 0이면 출력하지 않음
        if (total === "0") return null;

        return (
          <div key={stat.key} className={styles.statSpan}>
            <span className={styles.totalOption}>
              {stat.name}: +{total}
              {stat.suffix && stat.suffix}
            </span>
            ({Number(base) > 0 && (<span className={styles.baseOption}> {base}</span>)}
            {Number(add) > 0 && (<span className={styles.addOption}> +{add}</span>)}
            {Number(starForce) > 0 && (<span className={styles.starForceOption}> +{starForce}</span>)}
            {Number(etc) > 0 && (<span className={styles.etcOption}> +{etc}</span>)}
            {Number(etc) < 0 && (<span className={styles.etcMinusOption}> {etc}</span>)}) {/* 음수일 경우 처리 | 혼돈의 주문서;;*/}
          </div>
        );
      })}
        <div className={styles.textText}>
          <div className={styles.upgradeSpan}>업그레이드 가능 횟수 : {upgradableCount}<span style={{ color : "rgb(255, 204, 2)"}}> (복구 가능 횟수 : {upgradeResilience})</span></div>
          <div className={styles.hammerSpan}>{goldenHammer === "적용"  && <span>황금 망치 제련 적용</span>}</div>
          {Number(cuttableCount) !== 255 && <div style={{ color: "rgb(255, 204, 2)"}}>가위 사용 가능 횟수 : {cuttableCount}</div>}
        </div>
    </div>
  );
}
