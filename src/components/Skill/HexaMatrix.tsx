import { HexaProps } from "@/Types/Hexa"

interface CharacterHexaProps {
  characterHexa: HexaProps;
}

export default function HexaMatrix({ characterHexa }: CharacterHexaProps) {
  console.log("헥사", characterHexa);

  return(
    <div></div>
  )
}