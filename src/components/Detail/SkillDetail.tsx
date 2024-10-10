// components
import LinkSkill from "../Skill/LinkSkill";
import VMatrix from "../Skill/VMatrix";
import HexaMatrix from "../Skill/HexaMatrix";
import Loading from "../Loading/Loading";

// store
import useOcid from "@/store/ocid";
import { useSkillNavStore } from "@/store/nav";

// queries
import { useLinkQuery } from "@/hooks/apis/useLinkQuery"
import { useVQuery } from "@/hooks/apis/useVQuery";
import { useHexaQuery } from "@/hooks/apis/useHexaQuery";

export default function SkillDetail() {
  const { selected } = useSkillNavStore();
  const { ocidState } = useOcid();
  const { data: linkData, isLoading: linkLoading, error: linkError } = useLinkQuery(ocidState);
  const { data: vData, isLoading: vLoading, error: vError } = useVQuery(ocidState, 5);
  const { data: hexaData, isLoading: hexaLoading, error: hexaError } = useHexaQuery(ocidState, 6);

  if(linkLoading || vLoading || hexaLoading) {
    return <Loading />;
  }

  if(linkError || vError || hexaError) {
    return <div>Error occurred while fetching data.</div>;
  }

  switch(selected) {
    case "LINK":
      return <LinkSkill characterLink={linkData} />
    case "VMATRIX":
      return <VMatrix characterV={vData} />   
    case "HEXAMATRIX":
      return <HexaMatrix characterHexa={hexaData} />
  }
}
