import { VProps } from "@/Types/VMatrix"

interface CharacterVProps {
  characterV: VProps
}

export default function VMatrix({ characterV }: CharacterVProps) {
  console.log("V매트릭스", characterV);
  
  return(
    <div></div>
  )
}