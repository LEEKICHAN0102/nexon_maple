import { useQuery } from "react-query";
import { getLink } from "@/api/api";

export const useLinkQuery = (ocidState: string) => {
  return useQuery(["linkData", ocidState], () => getLink(ocidState), {
    staleTime: 1000 * 60 * 5,
  });
};