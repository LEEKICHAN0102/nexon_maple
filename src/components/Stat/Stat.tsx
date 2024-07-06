import useCharacterStats from "@/hooks/useCharacterStats";
import styles from "./stat.module.css";

export default function Stat({ characterStat }: { characterStat: any }) {
  const stats = useCharacterStats(characterStat);

  return (
    <main>
      <div className={styles.mainDiv}>
        <div className={styles.mainInfo}>
          <p>전투력</p>
          <span className={styles.mainInfoSpan}>{stats["전투력"]}</span>
        </div>
        <div className={styles.mainStat}>
          <span>스탯 공격력: ▲ {stats["최대 스탯공격력"]}</span>
          <span>데미지: {stats["데미지"]} %</span>
          <span>최종뎀: {stats["최종 데미지"]} %</span>
          <span>보스 몬스터 데미지: {stats["보스 몬스터 데미지"]} %</span>
          <span>방어율 무시: {stats["방어율 무시"]} %</span>
          <span>일반 몬스터 데미지: {stats["일반 몬스터 데미지"]} %</span>
          <span>공격력: {stats["공격력"]}</span>
          <span>크리티컬 확률: {stats["크리티컬 확률"]} %</span>
          <span>마력: {stats["마력"]}</span>
          <span>크리티컬 데미지: {stats["크리티컬 데미지"]} %</span>
          <span>재사용 대기시간 감소: {stats["재사용 대기시간 감소 (%)"]} % / {stats["재사용 대기시간 감소 (초)"]} 초</span>
          <span>버프 지속시간: {stats["버프 지속시간"]} %</span>
          <span>재사용 대기시간 미적용: {stats["재사용 대기시간 미적용"]} %</span>
          <span>속성 내성 무시: {stats["속성 내성 무시"]} %</span>
          <span>상태이상 추가 데미지: {stats["상태이상 추가 데미지"]} %</span>
          <span>무기 숙련도: {stats["무기 숙련도"]} %</span>
        </div>
        <div className={styles.subStat}>
          <span>메소 획득량: {stats["메소 획득량"]}%</span>
          <span>스타포스: {stats["스타포스"]}</span>
          <span>아이템 드롭률: {stats["아이템 드롭률"]}%</span>
          <span>아케인포스: {stats["아케인포스"]}</span>
          <span>추가 경험치 획득: {stats["추가 경험치 획득"]}%</span>
          <span>어센틱포스: {stats["어센틱포스"]}</span>
        </div>
      </div>
    </main>
  );
}
