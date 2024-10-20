// components
import LinkSkill from "../Skill/LinkSkill";
import VMatrix from "../Skill/VMatrix";
import HexaMatrix from "../Skill/HexaMatrix";
import Loading from "../Loading/Loading";

// store
import useOcid from "@/store/ocid";
import { useSkillNavStore } from "@/store/nav";

// queries
import { useLinkQuery } from "@/hooks/apis/Skill/useLinkQuery"
import { useVQuery } from "@/hooks/apis/Skill/useVQuery";
import { useHexaQuery } from "@/hooks/apis/Skill/useHexaQuery";
import { useHexaStatQuery } from "@/hooks/apis/Skill/useHexaStatQuery";
import { useSkillQueries } from "@/hooks/apis/Skill/useSkillQueries";

export default function SkillDetail() {
  const { selected } = useSkillNavStore();
  const { ocidState } = useOcid();

  const results = useSkillQueries(ocidState, 5, 6);

  const isLoading = results.some(result => result.isLoading);
  const isError = results.some(result => result.isError);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  
  const linkData = results[0].data;
  const vData = results[1].data;
  const hexaData = results[2].data;
  const hexaStatData = results[3].data;

  switch(selected) {
    case "LINK":
      return <LinkSkill characterLink={linkData} />
    case "VMATRIX":
      return <VMatrix characterV={vData} />   
    case "HEXAMATRIX":
      return <HexaMatrix characterHexa={hexaData} characterHexaStat={hexaStatData} />
  }
}
