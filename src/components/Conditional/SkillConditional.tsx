import { useLinkQuery } from "@/hooks/apis/useLinkQuery"
import { useVQuery } from "@/hooks/apis/useVQuery";
import { useHexaQuery } from "@/hooks/apis/useHexaQuery";
import useOcid from "@/store/ocid";

import LinkSkill from "../Skill/LinkSkill";
import Loading from "../Loading/Loading";
import Navigation from "../Navigation/Navigation";
import VMatrix from "../Skill/VMatrix";
import HexaMatrix from "../Skill/HexaMatrix";

export default function SkillConditional() {
  const { ocidState } = useOcid();
  const { data: linkData, isLoading: linkLoading, error: linkError } = useLinkQuery(ocidState);
  const { data: vData, isLoading: vLoading, error: vError } = useVQuery(ocidState);
  const { data: hexaData, isLoading: hexaLoading, error: hexaError } = useHexaQuery(ocidState);

  if(linkLoading || vLoading || hexaLoading) {
    return <Loading />;
  }

  if(linkError || vError || hexaError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return(
    <div>
      <Navigation />
      <LinkSkill characterLink={linkData} />
      <VMatrix characterV={vData} />
      <HexaMatrix characterHexa={hexaData} />
    </div>
  )
}