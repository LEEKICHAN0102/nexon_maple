import { usePetQuery } from "@/hooks/apis/usePetQuery"
import { PetProps } from "@/Types/Pet"

interface PetsProps {
  characterPet: PetProps
}

export default function Pet({ characterPet }: PetsProps) {
  console.log("펫 정보:", characterPet);

  return(
    <div>

    </div>
  )
}