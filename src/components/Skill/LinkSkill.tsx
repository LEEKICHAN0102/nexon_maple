import styles from "./linkSkill.module.css";

import { LinkProps } from "@/Types/Link";

interface CharacterLinkProps {
  characterLink: LinkProps;
}

export default function LinkSkill({ characterLink }: CharacterLinkProps) {
  console.log("캐릭터 링크 보기:", characterLink);

  return(
    <div>

    </div>
  )
}