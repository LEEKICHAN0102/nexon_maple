// Conditional Component
import EquipConditional from "../Conditional/EquipConditional";
import StatConditional from "../Conditional/StatConditional";
import SkillConditional from "../Conditional/SkillConditional";
import CashConditional from "../Conditional/CashConditional";

// store
import { useNavStore } from "@/store/nav";

export default function Detail() {
  const { selected } = useNavStore();

  switch(selected) {
    case "STAT":
      return <StatConditional />
    case "EQUIP":
      return <EquipConditional />
    case "SKILL":
      return <SkillConditional />
    case "CASH":
      return <CashConditional />
  }
}
