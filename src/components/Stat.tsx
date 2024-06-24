import useCharacterStats from "@/hooks/useCharacterStats";
import styles from "./stat.module.css"

export default function Stat({ characterStat }: { characterStat: any }) {
  const stats = useCharacterStats(characterStat);

  return (
    <main>
      <div className={styles.mainDiv}>
        <p>직업: {characterStat?.character_class}</p>
        <span>전투력: {stats["전투력"]}</span>
        <span>스공: {stats["최소 스탯공격력"]} ~ {stats["최대 스탯공격력"]}</span>
        <span>공격력: {stats["공격력"]}</span>
        <span>마력: {stats["마력"]}</span>
        <span>데미지: {stats["데미지"]}%</span>
        <span>보공: {stats["보스 몬스터 데미지"]}%</span>
        <span>최종뎀: {stats["최종 데미지"]}%</span>
        <span>방무: {stats["방어율 무시"]}%</span>
        <span>크확: {stats["크리티컬 확률"]}%</span>
        <span>상태 내성: {stats["상태이상 내성"]}%</span>
        <span>스탠스: {stats["스탠스"]}</span>
        <span>스타포스: {stats["스타포스"]}</span>
        <span>아케인포스: {stats["아케인포스"]}</span>
        <span>어센틱포스: {stats["어센틱포스"]}</span>
        <span>아드: {stats["아이템 드롭률"]}%</span>
        <span>메획: {stats["메소 획득량"]}%</span>
      </div>
    </main>
  );
}
